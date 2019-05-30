import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { TokenOverview, TokenSortByKey } from 'slpdex-market';
import { MarketService } from '../../../market.service';
import { SLPRoutes } from '../../../slp-routes';

interface TokensSort {
  name: string;
  sortKey?: TokenSortByKey;
  sortBy?: string;
  ignoreSorting?: boolean;
}

@Component({
  selector: 'app-tokens-list',
  templateUrl: './tokens-list.component.html',
  styleUrls: ['./tokens-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensListComponent implements OnInit, OnDestroy {
  tokens: TokenOverview[] = [];
  slpRoutes = { ...SLPRoutes };

  tokensSort: TokensSort[] = [
    {
      name: '#',
      ignoreSorting: true,
    },
    {
      name: 'NAME',
      ignoreSorting: true,
    },
    {
      name: 'MARKET CAP',
      sortBy: 'desc',
      sortKey: 'marketCapSatoshis',
    },
    {
      name: 'PRICE',
      sortKey: 'pricePerToken',
    },
    {
      name: 'VOLUME 24H',
      sortKey: 'volumeSatoshis',
    },
    {
      name: 'CHANGE 24H',
      sortKey: 'priceIncrease',
    },
  ];

  private destroy$ = new Subject();

  constructor(
    private marketService: MarketService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.fetchTokens('marketCapSatoshis', false);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  sortColumn = (item: TokensSort) => {
    this.tokensSort = this.tokensSort.map(sort => {
      if (sort.name === item.name) {
        if (sort.sortBy === 'asc' || sort.sortBy === null) {
          sort.sortBy = 'desc';
          this.fetchTokens(sort.sortKey, false);
        } else {
          sort.sortBy = 'asc';
          this.fetchTokens(sort.sortKey, true);
        }
      } else {
        sort.sortBy = null;
      }

      return sort;
    });

    this.changeDetectorRef.markForCheck();
  };

  trackByName = (index: number, item: TokensSort) => {
    return item.name;
  };

  private fetchTokens = (sort: TokenSortByKey, asc: boolean) => {
    this.marketService
      .getMarketOverview(sort, 0, 10, asc)
      .pipe(take(1))
      .subscribe(overview => {
        this.tokens = overview;
        this.changeDetectorRef.markForCheck();
      });
  };
}
