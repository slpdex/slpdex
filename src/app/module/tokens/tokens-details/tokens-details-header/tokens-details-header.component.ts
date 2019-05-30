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
import * as moment from 'moment';

interface HeaderStat {
  heading: string;
  stat: string;
  color?: string;
}

@Component({
  selector: 'app-tokens-details-header',
  templateUrl: './tokens-details-header.component.html',
  styleUrls: ['./tokens-details-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsHeaderComponent implements OnInit, OnDestroy {
  headerStats: HeaderStat[] = [];
  tokenOverview: TokenOverview;
  tokenId: string;

  private destroy$ = new Subject();

  constructor(
    private marketService: MarketService,
    private changeDetectorRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    combineLatest([this.activatedRoute.params, this.marketService.marketToken])
      .pipe(
        takeUntil(this.destroy$),
        map(([params, marketToken]) => {
          this.tokenId = params.id;

          this.getOverview();
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

  private getOverview = () => {
    this.marketService
      .getMarketOverview('marketCapSatoshis', 0, 10, false) // TODO: fetch 1 token
      .pipe(takeUntil(this.destroy$))
      .subscribe(tokenOverview => {
        const currentToken = tokenOverview.find(
          x => x.tokenId === this.tokenId,
        );
        this.tokenOverview = currentToken;

        this.createStats();
      });
  };

  private createStats = () => {
    const change24 = this.tokenOverview.last24h.priceIncrease * 100;
    console.log(change24);

    const positiveChange = change24 > 0;

    this.headerStats = [
      {
        heading: 'Last price',
        stat:
          convertSatsToBch(
            this.tokenOverview.lastTrade.pricePerToken,
          ).toString() + ' BCH',
      },
      {
        heading: 'Volume 24h',
        stat:
          convertSatsToBch(
            this.tokenOverview.last24h.volumeSatoshis,
          ).toString() + ' BCH',
      },
      {
        heading: 'Change 24h',
        stat: change24 + '%',
        color: positiveChange ? 'green' : 'red',
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
