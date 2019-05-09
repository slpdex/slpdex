import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllTokens, allTokensQuery } from './queries/allTokensQuery';
import {
  TimeSinceLastBlock,
  timeSinceLastBlockQuery,
} from './queries/timeSinceLastBlockQuery';
import { TokenDetails, tokenDetailsQuery } from './queries/tokenDetailsQuery';
import { bchUsdQuery, CryptoNator } from './queries/bchUsdQuery';

@Injectable({
  providedIn: 'root',
})
export class EndpointsService {
  constructor(private httpClient: HttpClient) {}

  getAllTokens = () => {
    return this.httpClient.get<AllTokens>(allTokensQuery());
  };

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
