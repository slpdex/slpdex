import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wallet } from 'cashcontracts';
import { combineLatest, Subject } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import { defaultNetworkSettings, TokenOverview } from 'slpdex-market';
import { CashContractsService } from '../../../../cash-contracts.service';
import { EndpointsService } from '../../../../endpoints.service';
import { convertBchToSats, convertSatsToBch } from '../../../../helpers';
import { MarketService } from '../../../../market.service';

@Component({
  selector: 'app-tokens-details-sell',
  templateUrl: './tokens-details-sell.component.html',
  styleUrls: ['./tokens-details-sell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsSellComponent implements OnInit, OnDestroy {
  tokenOverview: TokenOverview = {} as TokenOverview;
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
    private endpointsService: EndpointsService,
    private marketService: MarketService,
  ) {}

  ngOnInit() {
    this.setDefaultAmounts();

    this.endpointsService
      .getBchUsdPrice()
      .pipe(take(1))
      .subscribe(usdPrice => {
        this.usdPrice = +usdPrice.ticker.price;
      });

    combineLatest([
      this.activatedRoute.params,
      this.marketService.marketOverview,
      this.cashContractsService.listenWallet,
    ])
      .pipe(
        takeUntil(this.destroy$),
        map(([params, marketOverview, wallet]) => {
          this.tokenId = params.id;
          this.wallet = wallet;

          if (!this.tokenId || !this.wallet) {
            return;
          }

          const tokenOverview = marketOverview.find(
            x => x.tokenId === this.tokenId,
          );

          if (!tokenOverview) {
            return;
          }

          this.tokenOverview = tokenOverview;

          const totalTokenBalance = wallet.tokenBalance(this.tokenId);
          this.totalTokenBalance = totalTokenBalance;

          this.calculateTotalPrice();
        }),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  priceChanged = value => {
    window.clearTimeout(this.priceTimer);

    this.priceTimer = window.setTimeout(() => {
      this.selectedBchPrice = value;
      this.changeDetectorRef.markForCheck();
    }, 1000);
  };

  sell = async () => {
    await this.cashContractsService.createSellOffer(
      {
        sellAmountToken: this.selectedTokenAmount,
        pricePerToken: convertBchToSats(+this.selectedBchPrice),
        feeAddress: defaultNetworkSettings.feeAddress,
        feeDivisor: defaultNetworkSettings.feeDivisor,
        receivingAddress: this.wallet.cashAddr(),
        tokenId: this.tokenId,
      },
      this.tokenOverview.decimals,
    );

    this.setDefaultAmounts();
  };

  setMaxTokens = () => {
    this.selectedTokenAmount = this.totalTokenBalance;
  };

  calculateTotalPrice = () => {
    this.totalPrice = +(
      this.selectedTokenAmount * +this.selectedBchPrice
    ).toFixed(8);

    this.changeDetectorRef.markForCheck();
  };

  private setDefaultAmounts = () => {
    window.clearTimeout(this.priceTimer);
    this.selectedTokenAmount = 0;
    this.selectedBchPrice = convertSatsToBch(1);
    this.calculateTotalPrice();
  };
}
