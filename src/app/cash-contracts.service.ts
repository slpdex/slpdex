import { Injectable } from '@angular/core';
import * as cc from 'cashcontracts';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { convertBchToSats, generateShortId } from './helpers';
import { NotificationService } from './notification.service';

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

  constructor(private notificationService: NotificationService) {}

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
        this.notificationService.showNotification(
          'Incoming transaction detected',
        );

        this.walletSubject.next(wallet);
      });

      this.walletSubject.next(wallet);
    });
  };

  getIsSecretInStorage = () => {
    this.isSecretInStorageSubject.next(cc.Wallet.isSecretInStorage());
  };

  sendBch = (address: string, amount: number) => {
    console.log(address, amount);
    this.notificationService.showNotification(
      `Trying to send ${amount} BCH to <a href="${address}">${generateShortId(
        address,
      )}</a>`,
    );

    this.walletSubject.pipe(take(1)).subscribe(async wallet => {
      console.log(wallet);

      const sats = convertBchToSats(amount);

      console.log(sats);

      const satsMinusFee = sats - cc.feeSendNonToken(wallet, sats);

      console.log(satsMinusFee);

      const item = cc.sendToAddressTx(wallet, address, satsMinusFee);

      console.log(item);

      const broadcast = await item.broadcast();

      console.log(item);
      console.log(broadcast);
    });
  };

  sendToken = (address: string, amount: number, tokenId: string) => {
    console.log(address, amount, tokenId);

    this.walletSubject.pipe(take(1)).subscribe(async wallet => {
      const item = cc.sendTokensToAddressTx(wallet, address, tokenId, amount);

      const broadcast = await item.broadcast();

      console.log(item);
      console.log(broadcast);
    });
  };
}
