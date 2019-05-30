import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  Input,
} from '@angular/core';
import { combineLatest, Subject, Observable } from 'rxjs';
import { map, takeUntil, take } from 'rxjs/operators';
import { TokenOffer, defaultNetworkSettings } from 'slpdex-market';
import { CashContractsService } from '../../../../cash-contracts.service';
import { MarketService } from '../../../../market.service';
import { TokensDetails } from '../tokens-details.component';
import { Wallet } from 'cashcontracts';
import * as moment from 'moment';

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
  @Input() token$: Observable<TokensDetails>;
  openOffers: TokenOfferExtended[] = [];

  private isLoading = false;
  private destroy$ = new Subject();
  private wallet: Wallet;

  constructor(
    private marketService: MarketService,
    private cashContractsService: CashContractsService,
    private changeDetectorRef: ChangeDetectorRef,
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
    ])
      .pipe(
        takeUntil(this.destroy$),
        map(([offers, wallet]) => {
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

          this.changeDetectorRef.markForCheck();
        }),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  cancel = (offer: TokenOfferExtended) => {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    // TODO: Replace with marketoverview for 1 token
    this.token$.pipe(take(1)).subscribe(async tokenDetails => {
      await this.cashContractsService.cancelSellOffer(
        offer.utxoEntry,
        {
          sellAmountToken: offer.sellAmountToken,
          pricePerToken: offer.pricePerToken,
          feeAddress: defaultNetworkSettings.feeAddress,
          feeDivisor: defaultNetworkSettings.feeDivisor,
          receivingAddress: this.wallet.cashAddr(),
          tokenId: tokenDetails._id,
        },
        tokenDetails.slp.detail,
      );

      this.isLoading = false;
    });
  };

  trackByTimestamp = (index: number, item: TokenOfferExtended) => {
    return item.timestamp;
  };
}
