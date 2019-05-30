import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bchUsdQuery, CryptoNator } from './queries/bchUsdQuery';
import {
  TimeSinceLastBlock,
  timeSinceLastBlockQuery,
} from './queries/timeSinceLastBlockQuery';
import { TokenDetails, tokenDetailsQuery } from './queries/tokenDetailsQuery';

@Injectable({
  providedIn: 'root',
})
export class EndpointsService {
  constructor(private httpClient: HttpClient) {}

  getTokenDetails = (symbol: string) => {
    return this.httpClient.get<TokenDetails>(tokenDetailsQuery(symbol));
  };

  getTimeSinceLastBlock = () => {
    return this.httpClient.get<TimeSinceLastBlock>(timeSinceLastBlockQuery());
  };

  getBchUsdPrice = () => {
    return this.httpClient.get<CryptoNator>(bchUsdQuery());
  };
}
