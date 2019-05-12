import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import QRCode from 'qrcode';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CashContractsService } from '../../../cash-contracts.service';

@Component({
  selector: 'app-wallet-receive',
  templateUrl: './wallet-receive.component.html',
  styleUrls: ['./wallet-receive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletReceiveComponent implements OnInit, OnDestroy {
  bchDataUrl$ = new BehaviorSubject<string>('');
  cashAddr$ = new BehaviorSubject<string>('');

  slpDataUrl$ = new BehaviorSubject<string>('');
  slpAddr$ = new BehaviorSubject<string>('');

  private destroy$ = new Subject();

  @ViewChild('bchInput') bchInput: ElementRef<HTMLInputElement>;
  @ViewChild('slpInput') slpInput: ElementRef<HTMLInputElement>;

  constructor(private cashContractsService: CashContractsService) {}

  ngOnInit() {
    this.loadWallet();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  loadWallet = () => {
    this.cashContractsService.listenWallet
      .pipe(takeUntil(this.destroy$))
      .subscribe(async wallet => {
        if (!wallet) {
          return;
        }

        const cashAddr = wallet.cashAddr();
        const slpAddr = wallet.slpAddr();

        this.cashAddr$.next(cashAddr);
        this.slpAddr$.next(slpAddr);

        const bchDataUrl = await QRCode.toDataURL(cashAddr);
        const slpDataUrl = await QRCode.toDataURL(slpAddr);

        this.bchDataUrl$.next(bchDataUrl);
        this.slpDataUrl$.next(slpDataUrl);
      });
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
