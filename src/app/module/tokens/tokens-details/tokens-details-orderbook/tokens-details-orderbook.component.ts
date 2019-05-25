import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

import SimpleBar from 'simplebar';
import { ActivatedRoute } from '@angular/router';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CashContractsService } from '../../../../cash-contracts.service';

@Component({
  selector: 'app-tokens-details-orderbook',
  templateUrl: './tokens-details-orderbook.component.html',
  styleUrls: ['./tokens-details-orderbook.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsOrderbookComponent
  implements OnInit, OnDestroy, AfterViewInit {
  tests = Array(30).fill(false);

  private destroy$ = new Subject();

  @ViewChild('list', { static: false }) list: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  ngAfterViewInit() {
    const simpleBar = new SimpleBar(this.list.nativeElement);
  }

  select = item => {
    item = true;
  };
}
