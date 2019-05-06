import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { EndpointsService } from '../endpoints.service';
import { AllTokensToken } from '../queries/allTokensQuery';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss'],
  animations: [],
})
export class TokensComponent implements OnInit {
  tokens: AllTokensToken[] = [];
  selectedToken: AllTokensToken;

  constructor(private endpointsService: EndpointsService) {}

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

        this.selectedToken = this.tokens[0];
      });
  };

  selectToken = (token: AllTokensToken) => {
    this.selectedToken = token;
  };
}
