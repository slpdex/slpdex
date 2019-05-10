import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import SimpleBar from 'simplebar';
import { AllTokensToken } from '../../../queries/allTokensQuery';

@Component({
  selector: 'app-tokens-list',
  templateUrl: './tokens-list.component.html',
  styleUrls: ['./tokens-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensListComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() tokens: AllTokensToken[] = [];

  @Output() selectToken = new EventEmitter<AllTokensToken>();

  selectedSymbol = '';

  @ViewChild('list') list: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const simpleBar = new SimpleBar(this.list.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.tokens && this.tokens.length) {
      this.selectedSymbol = this.tokens[0].slp.detail.symbol;
    }
  }

  select = (token: AllTokensToken) => {
    this.selectToken.emit(token);
    this.selectedSymbol = token.slp.detail.symbol;
  };
}
