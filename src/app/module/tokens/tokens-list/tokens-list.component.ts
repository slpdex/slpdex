import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { CoinCard } from '../../../coin-card/coin-card.component';
import { EndpointsService } from '../../../endpoints.service';
import { getJdenticon } from '../../../helpers';
import { AllTokens } from '../../../queries/allTokensQuery';

interface TokensList extends CoinCard {
  isSelected?: boolean;
}

@Component({
  selector: 'app-tokens-list',
  templateUrl: './tokens-list.component.html',
  styleUrls: ['./tokens-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensListComponent implements OnInit, OnDestroy {
  tokens$ = new BehaviorSubject<TokensList[]>([]);

  private destroy$ = new Subject();

  constructor(
    private endpointsService: EndpointsService,
    private domSanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.endpointsService
      .getAllTokens()
      .pipe(take(1))
      .subscribe(data => {
        this.renderTokens(data);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  selectToken = (token: TokensList) => {};

  private renderTokens = (data: AllTokens) => {
    const tokens = data.t.filter(item => {
      return item.slp.detail.name && item.slp.detail.symbol;
    });

    const cards: TokensList[] = tokens.map((token, index) => {
      return {
        id: token.slp.detail.tokenIdHex,
        name: token.slp.detail.name,
        symbol: token.slp.detail.symbol,
        isToken: true,
        isSelected: index === 0,
        icon: this.domSanitizer.bypassSecurityTrustHtml(
          getJdenticon(token.slp.detail.tokenIdHex),
        ),
      } as TokensList;
    });

    this.tokens$.next(cards);
  };
}
