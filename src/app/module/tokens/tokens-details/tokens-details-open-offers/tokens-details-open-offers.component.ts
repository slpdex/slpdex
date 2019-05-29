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

  private destroy$ = new Subject();
  private wallet: Wallet;

  constructor(
    private marketService: MarketService,
    private cashContractsService: CashContractsService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    combineLatest([
      this.marketService.offers,
      this.cashContractsService.listenWallet,
    ])
      .pipe(
        takeUntil(this.destroy$),
        map(([offers, wallet]) => {
          if (!wallet) {
            return;
          }
          this.wallet = wallet;

          const cashAddres = wallet.cashAddr();

          this.openOffers = offers
            .filter(offer => {
              return offer.receivingAddress === cashAddres ? offer : false;
            })
            .map(offer => {
              return {
                ...offer,
                timeSince: moment.unix(offer.timestamp).fromNow(),
              } as TokenOfferExtended;
            });

          this.changeDetectorRef.markForCheck();

          console.log(offers);
          console.log(wallet);
        }),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  cancel = (offer: TokenOfferExtended) => {
    this.token$.pipe(take(1)).subscribe(tokenDetails => {
      this.cashContractsService.cancelSellOffer(
        offer.utxoEntry,
        {
          sellAmountToken: offer.sellAmountToken,
          pricePerToken: offer.pricePerToken,
          feeAddress: defaultNetworkSettings.feeAddress,
          feeDivisor: defaultNetworkSettings.feeDivisor,
          receivingAddress: this.wallet.cashAddr(),
          tokenId: this.marketService.tokenId(),
        },
        tokenDetails.slp.detail,
      );
    });
  };

  trackByTimestamp = (index: number, item: TokenOfferExtended) => {
    return item.timestamp;
  };
}
