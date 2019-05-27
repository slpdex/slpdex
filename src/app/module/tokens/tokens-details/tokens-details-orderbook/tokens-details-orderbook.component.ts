import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TradeOfferParams, Wallet } from 'cashcontracts';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import SimpleBar from 'simplebar';
import { TokenOffer } from 'slpdex-market/dist/token';
import { CashContractsService } from '../../../../cash-contracts.service';
import { EndpointsService } from '../../../../endpoints.service';
import { convertSatsToBch } from '../../../../helpers';
import { MarketService } from '../../../../market.service';
import { TokensDetails } from '../tokens-details.component';
import { defaultNetworkSettings } from 'slpdex-market';

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
  @Input() token$: Observable<TokensDetails>;

  openOffers$ = new BehaviorSubject<TokenOfferExtended[]>([]);
  selectedOffer$ = new BehaviorSubject<TokenOfferExtended>(null);

  selectedAmount = 0;
  tokenTotalAmount = 0;
  selectedBchPrice = 0;
  usdPrice = 0;

  private tokenId: string;
  private wallet: Wallet;
  private destroy$ = new Subject();

  @ViewChild('list', { static: false }) list: ElementRef<HTMLElement>;

  constructor(
    private marketService: MarketService,
    private activatedRoute: ActivatedRoute,
    private endpointsService: EndpointsService,
    private cashContractsService: CashContractsService,
  ) {}

  ngOnInit() {
    this.cashContractsService.listenWallet
      .pipe(takeUntil(this.destroy$))
      .subscribe(wallet => {
        if (!wallet) {
          return;
        }

        this.wallet = wallet;
      });

    this.endpointsService
      .getBchUsdPrice()
      .pipe(take(1))
      .subscribe(price => {
        this.usdPrice = +price.ticker.price;
      });

    this.activatedRoute.params.pipe(take(1)).subscribe(async params => {
      this.tokenId = params.id;

      const details = await this.marketService.getTokenDetails(this.tokenId);

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

  select = (item: TokenOfferExtended) => {
    this.openOffers$.pipe(take(1)).subscribe(offers => {
      const newOffers = offers.map(offer => {
        offer.selected = item === offer;
        return offer;
      });

      this.tokenTotalAmount = item.sellAmountToken;
      this.selectedAmount = item.sellAmountToken;
      this.selectedBchPrice = item.bchPricePerToken;

      this.selectedOffer$.next(item);
      this.openOffers$.next(newOffers);
    });
  };

  buy = () => {
    this.selectedOffer$.pipe(take(1)).subscribe(selectedOffer => {
      this.token$.pipe(take(1)).subscribe(tokenDetails => {
        const params: TradeOfferParams = {
          buyAmountToken: this.selectedAmount,
          feeAddress: defaultNetworkSettings.feeAddress,
          feeDivisor: defaultNetworkSettings.feeDivisor,
          pricePerToken: selectedOffer.pricePerToken,
          receivingAddress: selectedOffer.receivingAddress,
          sellAmountToken: selectedOffer.sellAmountToken,
          tokenId: this.tokenId,
        };

        console.log(selectedOffer);
        console.log(params);

        this.cashContractsService.createBuyOffer(
          selectedOffer.utxoEntry,
          params,
          tokenDetails.slp.detail,
        );
      });
    });
  };
}
