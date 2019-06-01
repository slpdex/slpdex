import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bchUsdQuery, CryptoNator } from './queries/bchUsdQuery';
import {
  TimeSinceLastBlock,
  timeSinceLastBlockQuery,
} from './queries/timeSinceLastBlockQuery';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EndpointsService {
  private bchUsdPriceSubject = new BehaviorSubject(0);
  private bchUsdFetchNew = true;

  constructor(private httpClient: HttpClient) {}

  get bchUsdPrice() {
    this.loadBchUsdPrice();
    return this.bchUsdPriceSubject.asObservable();
  }

  getTimeSinceLastBlock = () => {
    return this.httpClient.get<TimeSinceLastBlock>(timeSinceLastBlockQuery());
  };

  private loadBchUsdPrice = () => {
    if (!this.bchUsdFetchNew) {
      return;
    }

    this.bchUsdFetchNew = false;

    window.setTimeout(() => (this.bchUsdFetchNew = true), 60000);

    this.httpClient.get<CryptoNator>(bchUsdQuery()).subscribe(bchUsdPrice => {
      if (bchUsdPrice.success) {
        this.bchUsdPriceSubject.next(+bchUsdPrice.ticker.price);
      }
    });
  };

  getBchUsdPrice = () => {
    return this.httpClient.get<CryptoNator>(bchUsdQuery());
  };
}
