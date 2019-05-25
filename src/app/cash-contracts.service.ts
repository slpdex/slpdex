import { Injectable } from '@angular/core';
import * as cc from 'cashcontracts';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { convertBchToSats, generateShortId, convertSatsToBch } from './helpers';
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

      this.wallet.addReceivedTxListener(direction => {
        if (direction.direction === 'incoming') {
          let msg: string;

          if (direction.nonTokenDelta) {
            msg = `${convertSatsToBch(direction.nonTokenDelta)} BCH`;
          } else {
            direction.tokenDelta.forEach((value, key) => {
              const tokenName = this.wallet.tokenDetails(key).name;

              msg = `${value} ${tokenName}`;
            });
          }

          this.notificationService.showNotification(
            `Incoming transaction detected - ${msg}`,
          );
        }

        this.emitWallet();
      });

      this.emitWallet();
    });
  };

  sendBch = (address: string, amount: number) => {
    console.log(address, amount);
    this.notificationService.showNotification(
      `Trying to send ${amount} BCH to <a href="https://explorer.bitcoin.com/bch/address/${address}">
      ${generateShortId(address)}</a>`,
    );

    this.walletSubject.pipe(take(1)).subscribe(async wallet => {
      const sats = convertBchToSats(amount);
      const satsMinusFee = sats - cc.feeSendNonToken(wallet, sats);
      const item = cc.sendToAddressTx(wallet, address, satsMinusFee);
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
      `Trying to send ${amount} ${name} to <a href="https://explorer.bitcoin.com/bch/address/${address}">
      ${generateShortId(address)}</a>`,
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

  getWif = () => {
    return this.wallet.privateKey().wif();
  };

  generateNewWallet = () => {
    cc.Wallet.storeRandomSecret();
    this.loadIsSecretInStorage();
  };

  loadIsSecretInStorage = () => {
    this.isSecretInStorageSubject.next(cc.Wallet.isSecretInStorage());
  };

  createSellOffer = async (params: cc.TradeOfferParams) => {
    const offer = cc.createAdvancedTradeOfferTxs(this.wallet, params);

    try {
      const tx1 = await offer[0].broadcast();
      console.log(tx1);
    } catch (e) {
      console.log(e);
      return;
    }

    try {
      const tx2 = await offer[1].broadcast();
      console.log(tx2);

      this.notificationService.showNotification(
        `Successfully broadcasted offer to network. TX:
        <a href="https://explorer.bitcoin.com/bch/tx/${tx2}">
      ${tx2.slice(0, 10)}...
        </a>`,
      );
    } catch (e) {
      console.log(e);
    }
  };

  private emitWallet = () => {
    this.walletSubject.next(this.wallet);
  };
}
