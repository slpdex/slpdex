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
  private wallet: cc.Wallet;

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

      this.wallet = await cc.Wallet.loadFromStorage();

      this.wallet.addReceivedTxListener(() => {
        this.notificationService.showNotification(
          'Incoming transaction detected',
        );

        this.emitWallet();
      });

      this.emitWallet();
    });
  };

  getIsSecretInStorage = () => {
    this.isSecretInStorageSubject.next(cc.Wallet.isSecretInStorage());
  };

  sendBch = (address: string, amount: number) => {
    console.log(address, amount);
    this.notificationService.showNotification(
      `Trying to send ${amount} BCH to <a href="https://explorer.bitcoin.com/bch/address/${address}">${generateShortId(
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

      const tx = broadcast.replace(/"/g, '');

      this.notificationService.showNotification(
        `Successfully broadcasted transaction to network. TX:
        <a href="https://explorer.bitcoin.com/bch/tx/${tx}">
      ${tx.slice(0, 10)}...
        </a>`,
      );

      this.emitWallet();
    });
  };

  sendToken = (
    address: string,
    amount: number,
    tokenId: string,
    name: string,
  ) => {
    console.log(address, amount, tokenId);

    this.notificationService.showNotification(
      `Trying to send ${amount} ${name} to <a href="https://explorer.bitcoin.com/bch/address/${address}">${generateShortId(
        address,
      )}</a>`,
    );

    this.walletSubject.pipe(take(1)).subscribe(async wallet => {
      const item = cc.sendTokensToAddressTx(wallet, address, tokenId, amount);

      const broadcast = await item.broadcast();

      const tx = broadcast.replace(/"/g, '');

      this.notificationService.showNotification(
        `Successfully broadcasted transaction to network. TX:
        <a href="https://explorer.bitcoin.com/bch/tx/${tx}">
      ${tx.slice(0, 10)}...
        </a>`,
      );

      this.emitWallet();
    });
  };

  getBchFee = (amount: number) => {
    return cc.feeSendNonToken(this.wallet, amount);
  };

  getTokenFee = (tokenId: string, amount: number) => {
    return cc.feeSendToken(this.wallet, tokenId, amount);
  };

  private emitWallet = () => {
    this.walletSubject.next(this.wallet);
  };
}
