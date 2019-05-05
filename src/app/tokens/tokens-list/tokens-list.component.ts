import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Token } from '../../endpoints';

@Component({
  selector: 'app-tokens-list',
  templateUrl: './tokens-list.component.html',
  styleUrls: ['./tokens-list.component.scss'],
})
export class TokensListComponent implements OnInit, OnChanges {
  @Input() tokens: Token[] = [];

  @Output() selectToken = new EventEmitter<Token>();

  selectedSymbol = '';

  constructor() {}

  ngOnInit() {
    console.log(this.tokens);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.tokens) {
      this.selectedSymbol = this.tokens[0].slp.detail.symbol;
    }
  }

  select = (token: Token) => {
    this.selectToken.emit(token);
    this.selectedSymbol = token.slp.detail.symbol;
  };
}
