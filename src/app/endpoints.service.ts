import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllTokens, allTokensEndpoint } from './endpoints';

@Injectable({
  providedIn: 'root',
})
export class EndpointsService {
  constructor(private httpClient: HttpClient) {}

  getAllTokens = () => {
    return this.httpClient.get<AllTokens>(allTokensEndpoint());
  };
}
