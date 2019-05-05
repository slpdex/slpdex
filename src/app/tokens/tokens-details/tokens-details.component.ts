import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Token, TokenDetailsC } from '../../endpoints';
import { EndpointsService } from '../../endpoints.service';
import { take } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-tokens-details',
  templateUrl: './tokens-details.component.html',
  styleUrls: ['./tokens-details.component.scss'],
})
export class TokensDetailsComponent implements OnInit, OnChanges {
  @Input() token: Token;

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
