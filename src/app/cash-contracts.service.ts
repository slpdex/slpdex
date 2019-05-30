import { Injectable } from '@angular/core';
import * as cc from 'cashcontracts';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { convertBchToSats, convertSatsToBch, generateShortId } from './helpers';
import { NotificationService } from './notification.service';
import { TokenDetailsDetail } from './queries/tokenDetailsQuery';

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
    this.loadWallet();
  };

  private loadWallet = async () => {
    this.isSecretInStorageSubject.next(cc.Wallet.isSecretInStorage());

    this.listenIsSecretInStorage.subscribe(async isInStorage => {
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
      this.showBroadcastResultNotification(broadcast);

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
      this.showBroadcastResultNotification(broadcast);

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
    this.loadWallet();
  };

  createBuyOffer = async (
    utxo: cc.UtxoEntry,
    params: cc.TradeOfferParams,
    tokenDetails: TokenDetailsDetail,
  ) => {
    const tokenFactor = Math.pow(10, tokenDetails.decimals);
    const verification = cc.verifyAdvancedTradeOffer(
      this.wallet,
      tokenFactor,
      params,
    );
    if (!verification.success) {
      this.notificationService.showNotification('Error: ' + verification.msg);
      return;
    }
    const offer = cc.acceptTradeOfferTx(
      this.wallet,
      utxo,
      params,
      tokenDetails,
    );
    console.log(offer);

    try {
      const broadcast = await offer.broadcast();
      this.showBroadcastResultNotification(broadcast);
    } catch (e) {
      console.log(e);
    }
  };

  createSellOffer = async (
    params: cc.TradeOfferParams,
    tokenDetails: TokenDetailsDetail,
  ) => {
    return new Promise(async resolve => {
      const tokenFactor = Math.pow(10, tokenDetails.decimals);
      const verification = cc.verifyAdvancedTradeOffer(
        this.wallet,
        tokenFactor,
        params,
      );

      if (!verification.success) {
        this.notificationService.showNotification('Error: ' + verification.msg);
        setTimeout(() => resolve(), 1000);
        return;
      }

      const offer = cc.createAdvancedTradeOfferTxs(
        this.wallet,
        tokenFactor,
        params,
      );

      const broadcast1 = await offer[0].broadcast();

      if (!broadcast1.success) {
        this.showBroadcastResultNotification(broadcast1);
        setTimeout(() => resolve(), 1000);
        return;
      }

      const broadcast2 = await offer[1].broadcast();
      this.showBroadcastResultNotification(broadcast2);
      setTimeout(() => resolve(), 1000);
    });
  };

  cancelSellOffer = (
    utxo: cc.UtxoEntry,
    params: cc.TradeOfferParams,
    tokenDetails: TokenDetailsDetail,
  ) => {
    return new Promise(resolve => {
      const cancelTx = cc.cancelTradeOfferTx(
        this.wallet,
        utxo,
        params,
        tokenDetails,
      );

      try {
        cancelTx.broadcast().then(broadcast => {
          this.showBroadcastResultNotification(broadcast);
        });
        setTimeout(() => resolve(), 1000);
      } catch (e) {
        console.log(e);
        setTimeout(() => resolve(), 1000);
      }
    });
  };

  private emitWallet = () => {
    this.walletSubject.next(this.wallet);
  };

  private showBroadcastResultNotification = (broadcast: cc.BroadcastResult) => {
    if (broadcast.success == false) {
      console.error(broadcast);
      const msg = broadcast.msg;
      this.notificationService.showNotification(
        `Transaction broadcasted failed: ${msg}`,
      );
      return;
    }
    const tx = broadcast.txid;
    this.notificationService.showNotification(
      `Successfully broadcasted transaction to network.
      <a href="https://explorer.bitcoin.com/bch/tx/${tx}">
        ${tx.slice(0, 10)}...
      </a>`,
    );
  };
}
