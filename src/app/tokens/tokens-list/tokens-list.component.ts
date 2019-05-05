import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Token } from '../../endpoints';

import SimpleBar from 'simplebar';

@Component({
  selector: 'app-tokens-list',
  templateUrl: './tokens-list.component.html',
  styleUrls: ['./tokens-list.component.scss'],
})
export class TokensListComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() tokens: Token[] = [];

  @Output() selectToken = new EventEmitter<Token>();

  selectedSymbol = '';

  @ViewChild('list') list: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit() {
    console.log(this.tokens);
  }

  ngAfterViewInit(): void {
    const simpleBar = new SimpleBar(this.list.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.tokens && this.tokens.length) {
      this.selectedSymbol = this.tokens[0].slp.detail.symbol;
    }
  }

  select = (token: Token) => {
    this.selectToken.emit(token);
    this.selectedSymbol = token.slp.detail.symbol;
  };
}
