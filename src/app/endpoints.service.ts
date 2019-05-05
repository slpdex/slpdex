import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AllTokens,
  allTokensEndpoint,
  getTokenDetails,
  TokenDetails,
} from './endpoints';

@Injectable({
  providedIn: 'root',
})
export class EndpointsService {
  constructor(private httpClient: HttpClient) {}

  getAllTokens = () => {
    return this.httpClient.get<AllTokens>(allTokensEndpoint());
  };

  getTokenDetails = (symbol: string) => {
    return this.httpClient.get<TokenDetails>(getTokenDetails(symbol));
  };
}
