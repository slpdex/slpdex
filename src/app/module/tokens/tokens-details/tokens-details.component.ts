import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { BehaviorSubject, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { EndpointsService } from '../../../endpoints.service';
import { TokenDetailsC } from '../../../queries/tokenDetailsQuery';

interface TokensDetails extends TokenDetailsC {
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

  private destroy$ = new Subject();

  constructor(
    private endpointsService: EndpointsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.pipe(take(1)).subscribe(params => {
      this.getTokenDetails(params.symbol);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  private getTokenDetails = (symbol: string) => {
    this.endpointsService
      .getTokenDetails('TTTT')
      .pipe(take(1))
      .subscribe(data => {
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
