import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, takeUntil } from 'rxjs/operators';
import { convertSatsToBch, convertBchToSats } from '../../../../helpers';
import BigNumber from 'bignumber.js';
import { CashContractsService } from '../../../../cash-contracts.service';
import { Subject } from 'rxjs';
import { Wallet } from 'cashcontracts';
import { TokensDetails } from '../tokens-details.component';

@Component({
  selector: 'app-tokens-details-sell',
  templateUrl: './tokens-details-sell.component.html',
  styleUrls: ['./tokens-details-sell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsSellComponent implements OnInit, OnDestroy {
  @Input() token$: TokensDetails;

  selectedTokenAmount = 0;
  selectedBchPrice = '0';
  totalTokenBalance = '0';

  private wallet: Wallet;
  private tokenId: string;
  private destroy$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private cashContractsService: CashContractsService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
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

          this.calculateTotal();
        });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

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
}
