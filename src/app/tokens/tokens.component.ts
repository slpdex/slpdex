import { Component, OnInit } from '@angular/core';
import { take, filter } from 'rxjs/operators';
import { Token } from '../endpoints';
import { EndpointsService } from '../endpoints.service';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss'],
  animations: [],
})
export class TokensComponent implements OnInit {
  tokens: Token[] = [];

  constructor(private endpointsService: EndpointsService) {}

  ngOnInit() {
    this.getAllTokens();
  }

  getAllTokens = () => {
    this.endpointsService
      .getAllTokens()
      .pipe(take(1))
      .subscribe(data => {
        console.log(data);
        this.tokens = data.t.filter(item => {
          return item.slp.detail.name && item.slp.detail.symbol;
        });
      });
  };
}
