import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { generateShortId, getJdenticon } from '../helpers';

export interface CoinCard {
  name: string;
  symbol: string;
  isToken?: boolean;
  balance?: number;
  id?: string;
  shortId?: string;
  icon?: SafeHtml;
}

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoinCardComponent implements OnInit, OnChanges {
  @Input() item: CoinCard;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item && this.item.id) {
      this.item = {
        ...this.item,
        shortId: generateShortId(this.item.id),
        icon: this.domSanitizer.bypassSecurityTrustHtml(
          getJdenticon(this.item.id),
        ),
      };
    }
  }
}
