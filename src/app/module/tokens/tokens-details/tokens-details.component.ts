import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { BehaviorSubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { EndpointsService } from '../../../endpoints.service';
import { MarketService } from '../../../market.service';
import { TokenDetailsC } from '../../../queries/tokenDetailsQuery';
import { SLPRoutes } from '../../../slp-routes';

export interface TokensDetails extends TokenDetailsC {
  timeSinceLastTrade: string;
}

@Component({
  selector: 'app-tokens-details',
  templateUrl: './tokens-details.component.html',
  styleUrls: ['./tokens-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsComponent implements OnInit, OnDestroy {
  tokenDetails$ = new BehaviorSubject<TokensDetails>(null);

  tests = [1, 2, 3, 4, 5];

  slpRoutes = { ...SLPRoutes };

  private destroy$ = new Subject();

  constructor(
    private endpointsService: EndpointsService,
    private activatedRoute: ActivatedRoute,
    private marketService: MarketService,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.pipe(take(1)).subscribe(params => {
      const tokenId = params.id;
      this.getTokenDetails(tokenId);

      this.marketService.loadOffersAndStartListener(tokenId);
    });

    this.marketService.marketOverview
      .pipe(takeUntil(this.destroy$))
      .subscribe(overview => {
        if (!overview.length) {
          this.marketService.loadMarketOverview('marketCapSatoshis', false);
        }
      });
  }

  ngOnDestroy() {
    this.marketService.unsubscribeMarketTokenListener();
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  private getTokenDetails = (symbol: string) => {
    this.endpointsService
      .getTokenDetails('TTTT')
      .pipe(take(1))
      .subscribe(data => {
        console.log(data);

        if (!data.c || !data.c.length) {
          return;
        }

        const timeSinceLastTrade = moment
          .unix(data.c[0].lastTrade.timestamp)
          .fromNow();

        this.tokenDetails$.next({
          ...data.c[0],
          timeSinceLastTrade,
        });
      });
  };
}
