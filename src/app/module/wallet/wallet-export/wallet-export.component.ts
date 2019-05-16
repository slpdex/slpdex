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
  selector: 'app-wallet-export',
  templateUrl: './wallet-export.component.html',
  styleUrls: ['./wallet-export.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletExportComponent implements OnInit, OnDestroy {
  publicKey$ = new BehaviorSubject<string>('');
  privateWif$ = new BehaviorSubject<string>('');
  privateWifQr$ = new BehaviorSubject(null);

  private destroy$ = new Subject();

  constructor(private cashContractsService: CashContractsService) {}

  ngOnInit() {
    this.cashContractsService.listenWallet
      .pipe(takeUntil(this.destroy$))
      .subscribe(async wallet => {
        if (!wallet) {
          return;
        }

        this.publicKey$.next(wallet.cashAddr());

        const wif = this.cashContractsService.getWif();
        this.privateWif$.next(wif);

        const wifQr = await generateBase64QrCode(wif);
        this.privateWifQr$.next(wifQr);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
