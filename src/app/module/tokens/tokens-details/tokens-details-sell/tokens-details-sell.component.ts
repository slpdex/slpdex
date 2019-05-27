import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wallet } from 'cashcontracts';
import { defaultNetworkSettings } from 'slpdex-market';
import { Subject, Observable } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { CashContractsService } from '../../../../cash-contracts.service';
import { EndpointsService } from '../../../../endpoints.service';
import { convertBchToSats, convertSatsToBch } from '../../../../helpers';
import { NotificationService } from '../../../../notification.service';
import { TokensDetails } from '../tokens-details.component';

@Component({
  selector: 'app-tokens-details-sell',
  templateUrl: './tokens-details-sell.component.html',
  styleUrls: ['./tokens-details-sell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsSellComponent implements OnInit, OnDestroy {
  @Input() token$: Observable<TokensDetails>;

  selectedTokenAmount = 0;
  selectedBchPrice = 0;
  totalTokenBalance = 0;
  totalPrice = 0;
  usdPrice = 0;

  private wallet: Wallet;
  private tokenId: string;
  private destroy$ = new Subject();
  private priceTimer: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cashContractsService: CashContractsService,
    private changeDetectorRef: ChangeDetectorRef,
    private notificationService: NotificationService,
    private endpointsService: EndpointsService,
  ) {}

  ngOnInit() {
    this.endpointsService
      .getBchUsdPrice()
      .pipe(take(1))
      .subscribe(usdPrice => {
        this.usdPrice = +usdPrice.ticker.price;
      });

    this.activatedRoute.params.pipe(take(1)).subscribe(params => {
      this.tokenId = params.id;

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
          this.totalTokenBalance = totalTokenBalance;

          this.calculateTotal();
        });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  calculateTotal = () => {
    this.totalPrice = +(
      this.selectedTokenAmount * +this.selectedBchPrice
    ).toFixed(8);

    this.changeDetectorRef.markForCheck();
  };

  priceChanged = value => {
    window.clearTimeout(this.priceTimer);

    this.priceTimer = window.setTimeout(() => {
      this.selectedBchPrice = value;
      this.changeDetectorRef.markForCheck();
    }, 1000);
  };

  sell = () => {
    this.token$.pipe(take(1)).subscribe(tokenDetails => {
      this.cashContractsService.createSellOffer(
        {
          sellAmountToken: this.selectedTokenAmount,
          pricePerToken: convertBchToSats(+this.selectedBchPrice),
          feeAddress: defaultNetworkSettings.feeAddress,
          feeDivisor: defaultNetworkSettings.feeDivisor,
          receivingAddress: this.wallet.cashAddr(),
          tokenId: this.tokenId,
        },
        tokenDetails.slp.detail,
      );
    });
  };
}
