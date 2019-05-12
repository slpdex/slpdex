import { Injectable } from '@angular/core';
import * as cb from 'cashcontracts-bch';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CashContractsService {
  private isSecretInStorageSubject = new BehaviorSubject<boolean>(false);
  private walletSubject = new BehaviorSubject<cb.Wallet>(null);

  get listenIsSecretInStorage() {
    return this.isSecretInStorageSubject.asObservable();
  }

  get listenWallet() {
    return this.walletSubject.asObservable();
  }

  constructor() {}

  init = () => {
    this.isSecretInStorageSubject.next(cb.Wallet.isSecretInStorage());

    this.loadWallet();
  };

  private loadWallet = async () => {
    this.listenIsSecretInStorage.pipe(take(1)).subscribe(async isInStorage => {
      if (!isInStorage) {
        return;
      }

      const wallet = await cb.Wallet.loadFromStorage();

      wallet.addReceivedTxListener(() => {
        this.loadWallet();
      });

      this.walletSubject.next(wallet);
    });
  };

  getIsSecretInStorage = () => {
    this.isSecretInStorageSubject.next(cb.Wallet.isSecretInStorage());
  };
}
