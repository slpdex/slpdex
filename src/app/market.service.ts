import { Injectable } from '@angular/core';

import * as Market from 'slpdex-market';
import { Observable, Observer } from 'rxjs';
import { TokenOffer } from 'slpdex-market';

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  constructor() {
  }

  getOffers = async (id: string) => {
    const marketToken = await Market.MarketToken.create(id, Market.defaultNetworkSettings);
    return Observable.create((observer: Observer<TokenOffer[]>) => {
      observer.next(marketToken.offers().toArray())
      marketToken.addReceivedOfferListener(() => observer.next(marketToken.offers().toArray()))
    })
  };
}
