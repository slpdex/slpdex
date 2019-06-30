import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import { TokenOverview } from 'slpdex-market';
import { MarketService } from '../../../market.service';
import { SLPRoutes } from '../../../slp-routes';

@Component({
  selector: 'app-tokens-details',
  templateUrl: './tokens-details.component.html',
  styleUrls: ['./tokens-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsComponent implements OnInit, OnDestroy {
  tokenOverview: TokenOverview = {} as TokenOverview;
  slpRoutes = { ...SLPRoutes };

  private destroy$ = new Subject();
  private tokenId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private marketService: MarketService,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.pipe(take(1)).subscribe(params => {
      this.tokenId = params.id;

      this.marketService.loadMarketOverviewToken(this.tokenId);
    });

    this.marketService.marketOverviewToken
      .pipe(
        takeUntil(this.destroy$),
        map(marketOverviewToken => {
          this.marketService.loadOffersAndStartListener(this.tokenId);

          if (!marketOverviewToken) {
            return;
          }

          this.tokenOverview = marketOverviewToken;
        }),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.marketService.unsubscribeMarketTokenListener();
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
