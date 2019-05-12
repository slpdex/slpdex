import { Injectable } from '@angular/core';
import BigNumber from 'bignumber.js';
import * as cb from 'cashcontracts-bch';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { convertBchToSats } from './helpers';

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
        console.log('addReceivedTxListener');
        this.loadWallet();
      });

      this.walletSubject.next(wallet);
    });
  };

  getIsSecretInStorage = () => {
    this.isSecretInStorageSubject.next(cb.Wallet.isSecretInStorage());
  };

  sendBch = (address: string, amount: number) => {
    console.log(address, amount);

    this.walletSubject.pipe(take(1)).subscribe(async wallet => {
      console.log(wallet);

      const sats = Math.floor(
        convertBchToSats(new BigNumber(amount)).toNumber(),
      );

      console.log(sats);

      const item = cb.sendToAddressTx(wallet, address, sats);

      console.log(item);

      const broadcast = await item.broadcast();

      console.log(item);
      console.log(broadcast);
    });
  };
}
