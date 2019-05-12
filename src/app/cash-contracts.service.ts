import { Injectable } from '@angular/core';
import * as cc from 'cashcontracts';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { convertBchToSats } from './helpers';

@Injectable({
  providedIn: 'root',
})
export class CashContractsService {
  private isSecretInStorageSubject = new BehaviorSubject<boolean>(false);
  private walletSubject = new BehaviorSubject<cc.Wallet>(null);

  get listenIsSecretInStorage() {
    return this.isSecretInStorageSubject.asObservable();
  }

  get listenWallet() {
    return this.walletSubject.asObservable();
  }

  constructor() {}

  init = () => {
    this.isSecretInStorageSubject.next(cc.Wallet.isSecretInStorage());

    this.loadWallet();
  };

  private loadWallet = async () => {
    this.listenIsSecretInStorage.pipe(take(1)).subscribe(async isInStorage => {
      if (!isInStorage) {
        return;
      }

      const wallet = await cc.Wallet.loadFromStorage();

      wallet.addReceivedTxListener(() => {
        console.log('addReceivedTxListener');
        this.loadWallet();
      });

      this.walletSubject.next(wallet);
    });
  };

  getIsSecretInStorage = () => {
    this.isSecretInStorageSubject.next(cc.Wallet.isSecretInStorage());
  };

  sendBch = (address: string, amount: number) => {
    console.log(address, amount);

    this.walletSubject.pipe(take(1)).subscribe(async wallet => {
      console.log(wallet);

      const sats = convertBchToSats(amount);

      console.log(sats);

      const item = cc.sendToAddressTx(wallet, address, sats);

      console.log(item);

      const broadcast = await item.broadcast();

      console.log(item);
      console.log(broadcast);
    });
  };

  sendToken = (address: string, amount: number, tokenId: string) => {
    console.log(address, amount, tokenId);

    this.walletSubject.pipe(take(1)).subscribe(async wallet => {
      const sats = Math.floor(convertBchToSats(amount));

      console.log(sats);

      const item = cc.sendTokensToAddressTx(wallet, address, tokenId, sats);

      const broadcast = await item.broadcast();

      console.log(item);
      console.log(broadcast);
    });
  };
}
