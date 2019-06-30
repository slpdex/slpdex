import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CashContractsService } from '../../../cash-contracts.service';
import { generateBase64QrCode } from '../../../helpers';

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

  constructor(private cashContractsService: CashContractsService) {}

  ngOnInit() {
    this.loadWallet();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  private loadWallet = () => {
    this.cashContractsService.getWallet
      .pipe(takeUntil(this.destroy$))
      .subscribe(async wallet => {
        if (!wallet) {
          return;
        }

        const cashAddr = wallet.cashAddr();
        const slpAddr = wallet.slpAddr();

        this.cashAddr$.next(cashAddr);
        this.slpAddr$.next(slpAddr);

        const bchDataUrl = await generateBase64QrCode(cashAddr);
        const slpDataUrl = await generateBase64QrCode(slpAddr);

        this.bchDataUrl$.next(bchDataUrl);
        this.slpDataUrl$.next(slpDataUrl);
      });
  };
}
