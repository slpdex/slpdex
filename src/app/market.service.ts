import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as Market from 'slpdex-market';

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  private marketToken$ = new BehaviorSubject<Market.MarketToken>(null);
  private marketTokenRef: Market.MarketToken;

  constructor() {}

  get marketToken() {
    return this.marketToken$.asObservable();
  }

  getMarketOverview = (
    sortByKey: Market.TokenSortByKey,
    skip: number,
    limit: number,
    ascending: boolean,
  ): Observable<Market.TokenOverview[]> => {
    return from(Market.MarketOverview.create()).pipe(
      take(1),
      map(overview => {
        return overview.tokens(sortByKey, skip, limit, ascending).toArray();
      }),
    );
  };

  loadOffersAndStartListener = (id: string) => {
    from(Market.MarketToken.create(id, Market.defaultNetworkSettings))
      .pipe(take(1))
      .subscribe(marketToken => {
        this.marketTokenRef = marketToken;

        this.marketToken$.next(this.marketTokenRef);
        this.startMarketTokenListener();
      });
  };

  unsubscribeMarketTokenListener = () => {
    this.marketTokenRef = null;
  };

  private startMarketTokenListener = () => {
    this.marketTokenRef.addReceivedOfferListener(() => {
      this.marketToken$.next(this.marketTokenRef);
    });
  };
}
