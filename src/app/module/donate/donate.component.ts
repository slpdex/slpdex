import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { generateBase64QrCode } from '../../helpers';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonateComponent implements OnInit {
  bchDataUrl: string;

  address = 'bitcoincash:qp5x5tmxluwm62ny66zy9u4zuqvkmcv8sq2ceuxmwd';

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  async ngOnInit() {
    this.bchDataUrl = await generateBase64QrCode(this.address);
    this.changeDetectorRef.markForCheck();
  }
}
