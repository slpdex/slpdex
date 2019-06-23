import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
export class TokensListComponent implements OnInit, OnDestroy, OnChanges {
  @Input() searchVal: string;

  tokens: TokenOverview[] = [];
  slpRoutes = { ...SLPRoutes };

  isLoading = true;

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

  private searchTimer: number;

  private destroy$ = new Subject();

  constructor(
    private marketService: MarketService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.marketService.loadMarketOverview('marketCapSatoshis', false);

    this.marketService.marketOverview
      .pipe(takeUntil(this.destroy$))
      .subscribe(overview => {
        if (!overview.length) {
          return;
        }

        this.isLoading = false;

        this.tokens = overview;
        this.changeDetectorRef.markForCheck();
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchVal) {
      window.clearTimeout(this.searchTimer);

      if (this.searchVal) {
        this.debounceSearch();
      }
    }
  }

  sortColumn = (item: TokensSort) => {
    this.tokensSort = this.tokensSort.map(sort => {
      if (sort.name === item.name) {
        if (sort.sortBy === 'asc' || sort.sortBy === null) {
          sort.sortBy = 'desc';
          this.marketService.loadMarketOverview(sort.sortKey, false);
        } else {
          sort.sortBy = 'asc';
          this.marketService.loadMarketOverview(sort.sortKey, true);
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

  private getMarketOverviewSearch = (search: string) => {
    this.marketService.loadMarketOverview('marketCapSatoshis', false, search);
  };

  debounceSearch = () => {
    this.searchTimer = window.setTimeout(() => {
      this.getMarketOverviewSearch(this.searchVal);
    }, 800);
  };
}
