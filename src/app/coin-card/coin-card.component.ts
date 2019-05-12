import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TokenDetails } from 'cashcontracts';

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoinCardComponent implements OnInit, AfterViewInit {
  @Input() item: TokenDetails & { shortId: string; balance: number };

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    window['jdenticon']();
  }
}
