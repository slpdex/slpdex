import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import BigNumber from 'bignumber.js';
import { generateShortId } from '../helpers';
import { SLPRoutes } from '../slp-routes';

export interface CoinCard {
  name: string;
  symbol: string;
  isToken?: boolean;
  balance?: BigNumber;
  percentage?: BigNumber;
  id?: string;
  shortId?: string;
  timeSince?: string;
  enableBalanceColor?: boolean;
}

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoinCardComponent implements OnInit, OnChanges {
  @Input() item: CoinCard;

  slpRoutes = { ...SLPRoutes };

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item && this.item.id) {
      this.item = {
        ...this.item,
        shortId: generateShortId(this.item.id),
      };
    }
  }

  stopEventPropagation = (event: Event) => {
    event.stopPropagation();
  };
}
