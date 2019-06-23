import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subject } from 'rxjs';
import { map, takeUntil, take } from 'rxjs/operators';
import { TokenOverview } from 'slpdex-market';
import { MarketService } from '../../../market.service';
import { SLPRoutes } from '../../../slp-routes';
import { CashContractsService } from '../../../cash-contracts.service';

@Component({
  selector: 'app-tokens-details',
  templateUrl: './tokens-details.component.html',
  styleUrls: ['./tokens-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsComponent implements OnInit, OnDestroy {
  tokenOverview: TokenOverview = {} as TokenOverview;
  slpRoutes = { ...SLPRoutes };
  walletConnected = false;

  private destroy$ = new Subject();
  private tokenId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private marketService: MarketService,
    private cashContractsService: CashContractsService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.pipe(take(1)).subscribe(params => {
      this.tokenId = params.id;

      this.marketService.loadMarketOverviewToken(this.tokenId);
    });

    combineLatest([
      this.marketService.marketOverviewToken,
      this.cashContractsService.listenWallet,
    ])
      .pipe(
        takeUntil(this.destroy$),
        map(([marketOverviewToken, wallet]) => {
          if (wallet) {
            this.walletConnected = true;
            this.changeDetectorRef.markForCheck();
          }

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
