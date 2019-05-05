import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Token } from '../../endpoints';

@Component({
  selector: 'app-tokens-list',
  templateUrl: './tokens-list.component.html',
  styleUrls: ['./tokens-list.component.scss'],
})
export class TokensListComponent implements OnInit {
  @Input() tokens: Token[] = [];

  @Output() selectToken = new EventEmitter<Token>();

  constructor() {}

  ngOnInit() {
    console.log(this.tokens);
  }

  select = (token: Token) => {
    this.selectToken.emit(token);
  };
}
