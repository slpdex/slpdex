import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { take } from 'rxjs/operators';
import { EndpointsService } from '../endpoints.service';
import { AllTokensToken } from '../queries/allTokensQuery';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensComponent implements OnInit {
  tokens: AllTokensToken[] = [];
  selectedToken: AllTokensToken;

  constructor(
    private endpointsService: EndpointsService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.getAllTokens();
  }

  getAllTokens = () => {
    this.endpointsService
      .getAllTokens()
      .pipe(take(1))
      .subscribe(data => {
        this.tokens = data.t.filter(item => {
          return item.slp.detail.name && item.slp.detail.symbol;
        });

        this.selectedToken = { ...this.tokens[0] };

        this.changeDetectorRef.markForCheck();
      });
  };

  selectToken = (token: AllTokensToken) => {
    this.selectedToken = { ...token };
  };
}
