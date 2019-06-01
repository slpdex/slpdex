import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TradeOfferParams, Wallet } from 'cashcontracts';
import { combineLatest, Subject } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import SimpleBar from 'simplebar';
import { defaultNetworkSettings, TokenOverview } from 'slpdex-market';
import { MarketToken, TokenOffer } from 'slpdex-market/dist/token';
import { CashContractsService } from '../../../../cash-contracts.service';
import { EndpointsService } from '../../../../endpoints.service';
import { convertSatsToBch } from '../../../../helpers';
import { MarketService } from '../../../../market.service';

export interface TokenOfferExtended extends TokenOffer {
  bchPricePerToken: number;
  selected?: boolean;
  isMyOrder?: boolean;
}

@Component({
  selector: 'app-tokens-details-orderbook',
  templateUrl: './tokens-details-orderbook.component.html',
  styleUrls: ['./tokens-details-orderbook.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsOrderbookComponent
  implements OnInit, OnDestroy, AfterViewInit {
  tokenOverview: TokenOverview = {} as TokenOverview;
  openOffers: TokenOfferExtended[] = [];
  selectedOffer: TokenOfferExtended;

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
    private changeDetectorRef: ChangeDetectorRef,
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

    combineLatest([
      this.activatedRoute.params,
      this.marketService.marketOverview,
      this.marketService.marketToken,
    ])
      .pipe(
        takeUntil(this.destroy$),
        map(([params, overview, token]) => {
          this.tokenId = params.id;

          this.findAndSetCurrentOverviewToken(overview);
          this.populateOrderbook(token);

          this.changeDetectorRef.markForCheck();
        }),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  ngAfterViewInit() {
    const simpleBar = new SimpleBar(this.list.nativeElement);
  }

  private findAndSetCurrentOverviewToken = (overview: TokenOverview[]) => {
    if (!overview.length) {
      return;
    }

    const currentToken = overview.find(x => x.tokenId === this.tokenId);

    if (!currentToken) {
      return;
    }

    this.tokenOverview = currentToken;
  };

  private populateOrderbook = (token: MarketToken) => {
    if (!token) {
      return;
    }

    const tokenOffer = token.offers().toArray();

    const openOffers = tokenOffer.map(item => {
      const isCurrentSelectedOffer =
        this.selectedOffer &&
        this.selectedOffer.selected &&
        this.selectedOffer.utxoEntry.txid === item.utxoEntry.txid;

      const isMyOrder = this.wallet
        ? item.receivingAddress === this.wallet.cashAddr()
        : false;

      return {
        ...item,
        bchPricePerToken: convertSatsToBch(item.pricePerToken),
        selected: isCurrentSelectedOffer,
        isMyOrder,
      } as TokenOfferExtended;
    });

    this.openOffers = openOffers;
  };

  select = (item: TokenOfferExtended) => {
    const offersWithSelect = this.openOffers.map(offer => {
      offer.selected = item === offer;
      return offer;
    });

    this.tokenTotalAmount = item.sellAmountToken;
    this.selectedAmount = item.sellAmountToken;
    this.selectedBchPrice = item.bchPricePerToken;

    this.selectedOffer = item;
    this.openOffers = offersWithSelect;
    this.changeDetectorRef.markForCheck();
  };

  buy = () => {
    if (!this.selectedOffer || !this.wallet || !this.tokenOverview) {
      return;
    }

    const params: TradeOfferParams = {
      buyAmountToken: this.selectedAmount,
      feeAddress: defaultNetworkSettings.feeAddress,
      feeDivisor: defaultNetworkSettings.feeDivisor,
      pricePerToken: this.selectedOffer.pricePerToken,
      receivingAddress: this.selectedOffer.receivingAddress,
      sellAmountToken: this.selectedOffer.sellAmountToken,
      tokenId: this.tokenId,
    };

    this.cashContractsService.createBuyOffer(
      this.selectedOffer.utxoEntry,
      params,
      this.tokenOverview.decimals,
    );
    this.clearSelectedOffer();
  };

  trackByIndex = (index: number, item: TokenOfferExtended) => {
    return index;
  };

  private clearSelectedOffer = () => {
    this.selectedOffer = null;

    this.openOffers.map(offer => {
      offer.selected = false;
      return offer;
    });

    this.changeDetectorRef.markForCheck();
  };
}
