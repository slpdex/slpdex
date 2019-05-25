import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { OfferItem } from '../offer.component';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferItemComponent implements OnInit {
  @Input() item: OfferItem;

  constructor() {}

  ngOnInit() {}
}
