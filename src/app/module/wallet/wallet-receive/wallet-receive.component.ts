import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import QRCode from 'qrcode';
import * as cc from 'cashcontracts';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-wallet-receive',
  templateUrl: './wallet-receive.component.html',
  styleUrls: ['./wallet-receive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletReceiveComponent implements OnInit {
  bchDataUrl$ = new Subject<string>();
  cashAddr$ = new Subject<string>();

  slpDataUrl$ = new Subject<string>();
  slpAddr$ = new Subject<string>();

  @ViewChild('bchInput') bchInput: ElementRef<HTMLInputElement>;
  @ViewChild('slpInput') slpInput: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit() {
    this.loadWallet();
  }

  loadWallet = async () => {
    const wallet = await cc.Wallet.loadFromStorage();

    const cashAddr = wallet.cashAddr();
    const slpAddr = wallet.slpAddr();

    this.cashAddr$.next(cashAddr);
    this.slpAddr$.next(slpAddr);

    const bchDataUrl = await QRCode.toDataURL(cashAddr);
    const slpDataUrl = await QRCode.toDataURL(slpAddr);

    this.bchDataUrl$.next(bchDataUrl);
    this.slpDataUrl$.next(slpDataUrl);
  };

  copyBch = () => {
    this.bchInput.nativeElement.select();
    document.execCommand('copy');
  };

  copySlp = () => {
    this.slpInput.nativeElement.select();
    document.execCommand('copy');
  };
}
