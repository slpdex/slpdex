import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoinCardComponent implements OnInit {
  @Input() name: Observable<string>;
  @Input() symbol: Observable<string>;
  @Input() balance: Observable<string>;

  constructor() {}

  ngOnInit() {}
}
