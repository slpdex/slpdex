import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  AfterViewInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TokenDetails } from 'cashcontracts-bch';

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoinCardComponent implements OnInit, AfterViewInit {
  @Input() item: TokenDetails;

  constructor() {}

  ngOnInit() {
    console.log(this.item);
  }

  ngAfterViewInit() {
    window['jdenticon']();
  }
}
