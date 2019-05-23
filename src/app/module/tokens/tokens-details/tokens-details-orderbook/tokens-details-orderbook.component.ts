import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

import SimpleBar from 'simplebar';

@Component({
  selector: 'app-tokens-details-orderbook',
  templateUrl: './tokens-details-orderbook.component.html',
  styleUrls: ['./tokens-details-orderbook.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsOrderbookComponent implements OnInit, AfterViewInit {
  tests = Array(30).fill(false);

  @ViewChild('list') list: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const simpleBar = new SimpleBar(this.list.nativeElement);
  }

  select = item => {
    item = true;
  };
}
