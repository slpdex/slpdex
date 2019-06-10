import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { take } from 'rxjs/operators';
import { CoinCard } from '../../../coin-card/coin-card.component';
import { MarketService } from '../../../market.service';
import BigNumber from 'bignumber.js';
import { TokenOverview } from 'slpdex-market';
import { SLPRoutes } from '../../../slp-routes';

@Component({
  selector: 'app-landing-top',
  templateUrl: './landing-top.component.html',
  styleUrls: ['./landing-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingTopComponent implements OnInit {
  gainers: CoinCard[] = [];
  losers: CoinCard[] = [];

  slpRoutes = { ...SLPRoutes };

  constructor(
    private marketService: MarketService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.marketService
      .getTop10GainersAndLosers()
      .pipe(take(1))
      .subscribe(gainersAndLosers => {
        this.gainers = gainersAndLosers.gainers.map(this.mapToCoinCard);
        this.losers = gainersAndLosers.losers.map(this.mapToCoinCard);

        this.changeDetectorRef.markForCheck();
      });
  }

  private mapToCoinCard = (item: TokenOverview) => {
    return {
      id: item.tokenId,
      name: item.name,
      percentage:
        (item.last24h && item.last24h.priceIncrease) || new BigNumber(0),
      enableBalanceColor: true,
      isToken: true,
    } as CoinCard;
  };
}
