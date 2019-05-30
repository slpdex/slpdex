import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import * as Market from 'slpdex-market';

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  private offersSubject$ = new BehaviorSubject<Market.TokenOffer[]>([]);
  private marketToken: Market.MarketToken;

  constructor() {}

  get offers() {
    return this.offersSubject$.asObservable();
  }

  getTokenOverview = (): Observable<Market.MarketOverview> => {
    return from(Market.MarketOverview.create());
  };

  tokenId = () => {
    return this.marketToken.tokenId();
  };

  loadOffersAndStartListener = async (id: string) => {
    try {
      this.marketToken = await Market.MarketToken.create(
        id,
        Market.defaultNetworkSettings,
      );

      this.offersSubject$.next(this.fetchOffers());

      this.startListener();
    } catch (e) {}
  };

  private fetchOffers = () => {
    return this.marketToken.offers().toArray();
  };

  private startListener = () => {
    this.marketToken.addReceivedOfferListener(() => {
      this.offersSubject$.next(this.fetchOffers());
    });
  };

  unsubscribeListener = () => {
    this.marketToken = null;
  };
}
