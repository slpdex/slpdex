import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import BigNumber from 'bignumber.js';
import { Wallet } from 'cashcontracts';
import { combineLatest, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { defaultNetworkSettings, TokenOverview } from 'slpdex-market';
import { CashContractsService } from '../../../../cash-contracts.service';
import { EndpointsService } from '../../../../endpoints.service';
import { convertBchToSats } from '../../../../helpers';
import { MarketService } from '../../../../market.service';

@Component({
  selector: 'app-tokens-details-sell',
  templateUrl: './tokens-details-sell.component.html',
  styleUrls: ['./tokens-details-sell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsSellComponent implements OnInit, OnDestroy {
  tokenOverview: TokenOverview = {} as TokenOverview;
  usdPrice = 0;

  selectedTokenAmount: number;
  selectedBchPrice: number;
  totalTokenBalance: number;
  totalPrice: number;

  private wallet: Wallet;
  private tokenId: string;
  private destroy$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private cashContractsService: CashContractsService,
    private changeDetectorRef: ChangeDetectorRef,
    private endpointsService: EndpointsService,
    private marketService: MarketService,
  ) {}

  ngOnInit() {
    this.setDefaultAmounts();

    this.endpointsService.bchUsdPrice
      .pipe(takeUntil(this.destroy$))
      .subscribe(price => {
        this.usdPrice = price;
      });

    combineLatest([
      this.activatedRoute.params,
      this.marketService.marketOverviewToken,
      this.cashContractsService.listenWallet,
    ])
      .pipe(
        takeUntil(this.destroy$),
        map(([params, marketOverviewToken, wallet]) => {
          this.tokenId = params.id;
          this.wallet = wallet;

          if (!this.tokenId || !this.wallet) {
            return;
          }

          if (!marketOverviewToken) {
            return;
          }

          this.tokenOverview = marketOverviewToken;
          this.totalTokenBalance = wallet.tokenBalance(this.tokenId).toNumber();

          this.calculateTotalPrice();
        }),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  sell = async () => {
    if (!this.selectedTokenAmount || !this.selectedBchPrice) {
      return;
    }

    const success = await this.cashContractsService.createSellOffer(
      {
        sellAmountToken: new BigNumber(this.selectedTokenAmount),
        pricePerToken: convertBchToSats(new BigNumber(this.selectedBchPrice)),
        feeAddress: defaultNetworkSettings.feeAddress,
        feeDivisor: new BigNumber(defaultNetworkSettings.feeDivisor),
        receivingAddress: this.wallet.cashAddr(),
        tokenId: this.tokenId,
      },
      this.tokenOverview.decimals,
    );

    if (success) {
      this.setDefaultAmounts();
    }
  };

  setMaxTokens = () => {
    this.selectedTokenAmount = this.totalTokenBalance;
    this.calculateTotalPrice();
  };

  calculateTotalPrice = () => {
    if (!this.selectedTokenAmount || !this.selectedBchPrice) {
      this.totalPrice = 0;
    } else {
      this.totalPrice = this.selectedTokenAmount * this.selectedBchPrice;
    }

    this.changeDetectorRef.markForCheck();
  };

  private setDefaultAmounts = () => {
    this.selectedTokenAmount = 0;
    this.selectedBchPrice = 0;
    this.calculateTotalPrice();
  };
}
