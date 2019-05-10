import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import * as moment from 'moment';
import { take } from 'rxjs/operators';
import { EndpointsService } from '../../../endpoints.service';
import { AllTokensToken } from '../../../queries/allTokensQuery';
import { TokenDetailsC } from '../../../queries/tokenDetailsQuery';

@Component({
  selector: 'app-tokens-details',
  templateUrl: './tokens-details.component.html',
  styleUrls: ['./tokens-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsComponent implements OnInit, OnChanges {
  @Input() token: AllTokensToken;

  tokenDetails: TokenDetailsC;
  timeSinceLastTrade: string;

  constructor(private endpointsService: EndpointsService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.token) {
      this.getTokenDetails();
    }
  }

  getTokenDetails = () => {
    this.endpointsService
      .getTokenDetails('TTTT')
      .pipe(take(1))
      .subscribe(data => {
        if (data.c && data.c.length) {
          this.tokenDetails = data.c[0];

          this.timeSinceLastTrade = moment
            .unix(this.tokenDetails.lastTrade.timestamp)
            .fromNow();
        } else {
          this.tokenDetails = null;
        }
      });
  };
}
