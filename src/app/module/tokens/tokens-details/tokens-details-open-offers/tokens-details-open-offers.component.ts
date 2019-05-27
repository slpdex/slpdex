import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { TokenOffer } from 'slpdex-market';
import { CashContractsService } from '../../../../cash-contracts.service';
import { MarketService } from '../../../../market.service';

@Component({
  selector: 'app-tokens-details-open-offers',
  templateUrl: './tokens-details-open-offers.component.html',
  styleUrls: ['./tokens-details-open-offers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsOpenOffersComponent implements OnInit, OnDestroy {
  openOffers: TokenOffer[] = [];

  private destroy$ = new Subject();

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

          const cashAddres = wallet.cashAddr();

          this.openOffers = offers.filter(offer => {
            return offer.receivingAddress === cashAddres ? offer : false;
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
}
