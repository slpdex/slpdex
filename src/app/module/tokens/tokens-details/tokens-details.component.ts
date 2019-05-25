import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BigNumber } from 'bignumber.js';
import { Wallet } from 'cashcontracts';
import * as moment from 'moment';
import { BehaviorSubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { CashContractsService } from '../../../cash-contracts.service';
import { EndpointsService } from '../../../endpoints.service';
import { convertBchToSats, convertSatsToBch } from '../../../helpers';
import { TokenDetailsC } from '../../../queries/tokenDetailsQuery';
import { SLPRoutes } from '../../../slp-routes';

interface TokensDetails extends TokenDetailsC {
  timeSinceLastTrade: string;
}

@Component({
  selector: 'app-tokens-details',
  templateUrl: './tokens-details.component.html',
  styleUrls: ['./tokens-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsComponent implements OnInit, OnDestroy {
  tokenDetails$ = new BehaviorSubject<TokensDetails>(null);

  selectedTokenAmount = 0;
  selectedBchPrice = '0';
  totalTokenBalance = '0';

  tokenId: string;

  tests = [1, 2, 3, 4, 5];

  slpRoutes = { ...SLPRoutes };

  private wallet: Wallet;

  private destroy$ = new Subject();

  constructor(
    private endpointsService: EndpointsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cashContractsService: CashContractsService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.pipe(take(1)).subscribe(params => {
      this.tokenId = params.id;
      this.getTokenDetails(this.tokenId);

      this.cashContractsService.listenWallet
        .pipe(takeUntil(this.destroy$))
        .subscribe(wallet => {
          if (!wallet) {
            return;
          }

          this.wallet = wallet;

          this.selectedBchPrice = convertSatsToBch(1);

          const totalTokenBalance = wallet.tokenBalance(this.tokenId);
          this.selectedTokenAmount = totalTokenBalance;

          this.calculateTotal();
        });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  createOffer = () => {
    this.router.navigate([SLPRoutes.offer], {
      state: {
        offer: 'wow',
      },
    });
  };

  calculateTotal = () => {
    this.totalTokenBalance = new BigNumber(
      this.selectedTokenAmount * +this.selectedBchPrice,
    ).toFixed(8);

    this.changeDetectorRef.markForCheck();
  };

  sell = () => {
    this.cashContractsService.createSellOffer({
      sellAmountToken: this.selectedTokenAmount,
      pricePerToken: convertBchToSats(+this.selectedBchPrice),
      feeAddress: this.wallet.cashAddr(),
      feeDivisor: 0,
      receivingAddress: this.wallet.cashAddr(),
      tokenId: this.tokenId,
    });
  };

  private getTokenDetails = (symbol: string) => {
    this.endpointsService
      .getTokenDetails('TTTT')
      .pipe(take(1))
      .subscribe(data => {
        console.log(data);

        if (!data.c || !data.c.length) {
          return;
        }

        const timeSinceLastTrade = moment
          .unix(data.c[0].lastTrade.timestamp)
          .fromNow();

        this.tokenDetails$.next({
          ...data.c[0],
          timeSinceLastTrade,
        });
      });
  };
}
