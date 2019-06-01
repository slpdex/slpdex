import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
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
    this.marketService.loadMarketOverview('marketCapSatoshis', false);

    combineLatest([
      this.activatedRoute.params,
      this.marketService.marketOverview,
    ])
      .pipe(
        takeUntil(this.destroy$),
        map(([params, marketOverview]) => {
          this.tokenId = params.id;
          this.marketService.loadOffersAndStartListener(this.tokenId);

          if (!marketOverview.length) {
            return;
          }

          this.tokenOverview = marketOverview.find(
            x => x.tokenId === this.tokenId,
          );
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
