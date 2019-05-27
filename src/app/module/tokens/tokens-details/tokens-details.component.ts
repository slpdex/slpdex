import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { BehaviorSubject, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { EndpointsService } from '../../../endpoints.service';
import { TokenDetailsC } from '../../../queries/tokenDetailsQuery';
import { SLPRoutes } from '../../../slp-routes';
import { MarketService } from '../../../market.service';

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
    private router: Router,
    private marketService: MarketService,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.pipe(take(1)).subscribe(params => {
      const tokenId = params.id;
      this.getTokenDetails(tokenId);

      this.marketService.loadOffersAndStartListener(tokenId);
    });
  }

  ngOnDestroy() {
    this.marketService.unsubscribeListener();
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  createOffer = () => {
    this.router.navigate([SLPRoutes.offer], {
      state: {
        offer: 'wow',
      },
    });
  };

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
