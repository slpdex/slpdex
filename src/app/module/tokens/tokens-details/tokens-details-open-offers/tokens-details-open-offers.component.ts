import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Wallet } from 'cashcontracts';
import * as moment from 'moment';
import BigNumber from 'bignumber.js';
import { combineLatest, Subject } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import {
  defaultNetworkSettings,
  TokenOffer,
  TokenOverview,
} from 'slpdex-market';
import { CashContractsService } from '../../../../cash-contracts.service';
import { MarketService } from '../../../../market.service';
import { ActivatedRoute } from '@angular/router';

interface TokenOfferExtended extends TokenOffer {
  timeSince: string;
}

@Component({
  selector: 'app-tokens-details-open-offers',
  templateUrl: './tokens-details-open-offers.component.html',
  styleUrls: ['./tokens-details-open-offers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsOpenOffersComponent implements OnInit, OnDestroy {
  tokenOverview: TokenOverview = {} as TokenOverview;
  openOffers: TokenOfferExtended[] = [];

  private isLoading = false;
  private destroy$ = new Subject();
  private wallet: Wallet;
  private tokenId: string;

  constructor(
    private marketService: MarketService,
    private cashContractsService: CashContractsService,
    private changeDetectorRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    combineLatest([
      this.marketService.marketToken.pipe(
        map(marketToken => {
          if (!marketToken) {
            return [];
          }

          return marketToken.offers().toArray();
        }),
      ),
      this.cashContractsService.listenWallet,
      this.marketService.marketOverview,
      this.activatedRoute.params,
    ])
      .pipe(
        takeUntil(this.destroy$),
        map(([offers, wallet, marketOverview, params]) => {
          this.tokenId = params.id;

          if (!wallet) {
            return;
          }

          this.wallet = wallet;

          const cashAddres = this.wallet.cashAddr();

          this.openOffers = offers
            .filter(offer => {
              return offer.receivingAddress === cashAddres ? offer : false;
            })
            .map(offer => {
              return {
                ...offer,
                timeSince: offer.timestamp
                  ? moment.unix(offer.timestamp).fromNow()
                  : 'Unconfirmed',
              } as TokenOfferExtended;
            });

          if (!marketOverview.length) {
            return;
          }

          const currentTokenOverview = marketOverview.find(
            x => x.tokenId === this.tokenId,
          );

          this.tokenOverview = currentTokenOverview;

          this.changeDetectorRef.markForCheck();
        }),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  cancel = async (offer: TokenOfferExtended) => {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    // TODO: Replace with marketoverview for 1 token
    await this.cashContractsService.cancelSellOffer(
      offer.utxoEntry,
      {
        sellAmountToken: offer.sellAmountToken,
        pricePerToken: offer.pricePerToken,
        feeAddress: defaultNetworkSettings.feeAddress,
        feeDivisor: new BigNumber(defaultNetworkSettings.feeDivisor),
        receivingAddress: this.wallet.cashAddr(),
        tokenId: this.tokenId,
      },
      this.tokenOverview.decimals,
    );

    this.isLoading = false;
  };

  trackByTimestamp = (index: number, item: TokenOfferExtended) => {
    return item.timestamp;
  };
}
