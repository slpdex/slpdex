import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, combineLatest } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { TokenOverview } from 'slpdex-market';
import { MarketService } from '../../../../market.service';
import { convertSatsToBch } from '../../../../helpers';
import BigNumber from 'bignumber.js';

interface HeaderStat {
  heading: string;
  stat: string | number;
  color?: string;
  isPrice?: boolean;
  isPercentage?: boolean;
}

@Component({
  selector: 'app-tokens-details-header',
  templateUrl: './tokens-details-header.component.html',
  styleUrls: ['./tokens-details-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsHeaderComponent implements OnInit, OnDestroy {
  headerStats: HeaderStat[] = [];
  tokenOverview: TokenOverview = {} as TokenOverview;
  tokenId: string;

  private destroy$ = new Subject();

  constructor(
    private marketService: MarketService,
    private changeDetectorRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    combineLatest([
      this.activatedRoute.params,
      // TODO: Replace with 1 token fetch
      this.marketService.marketOverview,
    ])
      .pipe(
        takeUntil(this.destroy$),
        map(([params, overview]) => {
          this.tokenId = params.id;

          if (!overview.length) {
            return;
          }

          const currentToken = overview.find(x => x.tokenId === this.tokenId);
          this.tokenOverview = currentToken;

          this.createStats();
        }),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  trackByName = (index: number, item: HeaderStat) => {
    return item.heading;
  };

  private displayStat = (
    stat: BigNumber | undefined,
    decimals: number = 0,
    convert: 'TO_BCH' | 'TO_PERCENT' | undefined = undefined,
  ) => {
    if (stat === undefined) {
      return 'n/a';
    }

    if (convert === 'TO_BCH') {
      stat = convertSatsToBch(stat);
    } else if (convert == 'TO_PERCENT') {
      return stat.times('100').toFixed(decimals) + '%';
    }

    return stat.toFixed(decimals);
  };

  private createStats = async () => {
    let changeColor = '';

    if (this.tokenOverview.last24h.priceIncrease === undefined) {
      changeColor = 'grey';
    } else if (this.tokenOverview.last24h.priceIncrease.gt(0)) {
      changeColor = 'green';
    } else if (this.tokenOverview.last24h.priceIncrease.gt(0)) {
      changeColor = 'red';
    }

    const moment = await import('moment');

    this.headerStats = [
      {
        heading: 'Last price',
        stat: this.displayStat(
          this.tokenOverview.lastTrade.pricePerToken,
          8,
          'TO_BCH',
        ),
        isPrice: true,
      },
      {
        heading: 'Volume 24h',
        stat: this.displayStat(
          this.tokenOverview.last24h.volumeSatoshis,
          8,
          'TO_BCH',
        ),
        isPrice: true,
      },
      {
        heading: 'Change 24h',
        stat: this.displayStat(
          this.tokenOverview.last24h.priceIncrease,
          1,
          'TO_PERCENT',
        ),
        color: changeColor,
      },
      {
        heading: 'Last trade',
        stat: this.tokenOverview.lastTrade.timestamp
          ? moment.unix(this.tokenOverview.lastTrade.timestamp).fromNow()
          : 'Now (Unconfirmed)',
      },
    ];

    this.changeDetectorRef.markForCheck();
  };
}
