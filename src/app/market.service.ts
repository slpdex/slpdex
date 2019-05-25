import { Injectable } from '@angular/core';

import * as Market from 'slpdex-market';

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  constructor() {}

  getTokenDetails = () => {
    Market.MarketOverview.create().then(overview => {
      console.log(overview);

      console.log(overview.tokens().toJS());
    });
  };
}
