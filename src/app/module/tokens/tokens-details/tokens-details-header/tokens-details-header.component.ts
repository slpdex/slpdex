import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { TokensDetails } from '../tokens-details.component';
import { MarketService } from '../../../../market.service';
import { take, map, takeUntil } from 'rxjs/operators';
import { forkJoin, Observable, Subject } from 'rxjs';
import * as moment from 'moment';
import { convertSatsToBch } from '../../../../helpers';

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
  @Input() token$: Observable<TokensDetails>;

  headerStats: HeaderStat[] = [];

  private destroy$ = new Subject();

  constructor(
    private marketService: MarketService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.marketService.offers
      .pipe(takeUntil(this.destroy$))
      .subscribe(offers => {
        this.getOverview();
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  trackByName = (index: number, item: HeaderStat) => {
    return item.heading;
  };

  private getOverview = () => {
    forkJoin([
      this.token$.pipe(take(1)),
      this.marketService.getTokenOverview().pipe(take(1)),
    ])
      .pipe(
        map(([token, overview]) => {
          const overviewToken = overview.tokens().get(token._id);

          if (overviewToken) {
            let change24: string = (
              overviewToken.lastTrade.price / overviewToken.price24hAgo
            ).toString();

            const isNegative =
              overviewToken.lastTrade.price < overviewToken.price24hAgo;

            if (isNegative) {
              change24 = '-' + change24;
            }

            this.headerStats = [
              {
                heading: 'Last price',
                stat:
                  convertSatsToBch(overviewToken.lastTrade.price).toString() +
                  ' BCH',
              },
              {
                heading: 'Volume',
                stat:
                  convertSatsToBch(overviewToken.volumeSatoshis).toString() +
                  ' BCH',
              },
              {
                heading: 'Change 24h',
                stat: change24 + '%',
                color: isNegative ? 'red' : 'green',
              },
              {
                heading: 'Last trade',
                stat: overviewToken.lastTrade.timestamp
                  ? moment.unix(overviewToken.lastTrade.timestamp).fromNow()
                  : 'Now (Unconfirmed)',
              },
            ];

            this.changeDetectorRef.markForCheck();
          }
        }),
      )
      .subscribe();
  };
}
