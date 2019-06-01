import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bchUsdQuery, CryptoNator } from './queries/bchUsdQuery';
import {
  TimeSinceLastBlock,
  timeSinceLastBlockQuery,
} from './queries/timeSinceLastBlockQuery';

@Injectable({
  providedIn: 'root',
})
export class EndpointsService {
  constructor(private httpClient: HttpClient) {}

  getTimeSinceLastBlock = () => {
    return this.httpClient.get<TimeSinceLastBlock>(timeSinceLastBlockQuery());
  };

  getBchUsdPrice = () => {
    return this.httpClient.get<CryptoNator>(bchUsdQuery());
  };
}
