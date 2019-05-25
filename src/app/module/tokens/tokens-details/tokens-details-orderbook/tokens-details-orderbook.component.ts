import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  Input,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import SimpleBar from 'simplebar';
import { TokenOffer } from 'slpdex-market/dist/token';
import { MarketService } from '../../../../market.service';
import { EndpointsService } from '../../../../endpoints.service';
import { convertSatsToBch } from '../../../../helpers';
import { TokensDetails } from '../tokens-details.component';

export interface TokenOfferExtended extends TokenOffer {
  selected?: boolean;
  bchPricePerToken: number;
}

@Component({
  selector: 'app-tokens-details-orderbook',
  templateUrl: './tokens-details-orderbook.component.html',
  styleUrls: ['./tokens-details-orderbook.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsOrderbookComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input() token$: TokensDetails;

  openOffers$ = new BehaviorSubject<TokenOfferExtended[]>([]);
  selectedOffer$ = new Subject<TokenOfferExtended>();

  selectedAmount = 0;
  tokenTotalAmount = 0;
  selectedBchPrice = 0;
  usdPrice = 0;

  private destroy$ = new Subject();

  @ViewChild('list', { static: false }) list: ElementRef<HTMLElement>;

  constructor(
    private marketService: MarketService,
    private activatedRoute: ActivatedRoute,
    private endpointsService: EndpointsService,
  ) {}

  ngOnInit() {
    this.endpointsService
      .getBchUsdPrice()
      .pipe(take(1))
      .subscribe(price => {
        this.usdPrice = +price.ticker.price;
      });

    this.activatedRoute.params.pipe(take(1)).subscribe(async params => {
      const tokenId = params.id;

      const details = await this.marketService.getTokenDetails(tokenId);

      if (!details) {
        return;
      }

      const openOffers = details
        .offers()
        .toArray()
        .map(item => {
          return {
            ...item,
            bchPricePerToken: convertSatsToBch(item.pricePerToken),
          } as TokenOfferExtended;
        });
      this.openOffers$.next(openOffers);
      console.log(openOffers);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  ngAfterViewInit() {
    const simpleBar = new SimpleBar(this.list.nativeElement);
  }

  changeAmount = () => {
    this.selectedBchPrice = convertSatsToBch(this.selectedAmount);
  };

  select = (item: TokenOfferExtended) => {
    this.openOffers$.pipe(take(1)).subscribe(offers => {
      const newOffers = offers.map(offer => {
        offer.selected = item.timestamp === offer.timestamp;
        return offer;
      });

      this.tokenTotalAmount = item.utxoEntry.vout;
      this.selectedAmount = item.utxoEntry.vout;
      this.selectedBchPrice = item.bchPricePerToken;

      this.selectedOffer$.next(item);
      this.openOffers$.next(newOffers);
    });
  };
}
