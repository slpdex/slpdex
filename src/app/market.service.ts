import { Injectable } from '@angular/core';

import * as Market from 'slpdex-market';

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  constructor() {}

  getTokenDetails = async (id: string) => {
    return Market.MarketToken.create(id, Market.defaultNetworkSettings);
  };
}
