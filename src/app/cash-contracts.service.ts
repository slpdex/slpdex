import { Injectable } from '@angular/core';
import BigNumber from 'bignumber.js';
import {
  acceptTradeOfferTx,
  AddressTxHistory,
  BroadcastResult,
  cancelTradeOfferTx,
  createAdvancedTradeOfferTxs,
  feeSendNonToken,
  feeSendToken,
  sendToAddressTx,
  sendTokensToAddressTx,
  TradeOfferParams,
  UtxoEntry,
  verifyAdvancedTradeOffer,
  Wallet,
} from 'cashcontracts';
import { BehaviorSubject, from } from 'rxjs';
import { take } from 'rxjs/operators';
import { convertBchToSats, convertSatsToBch, generateShortId } from './helpers';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class CashContractsService {
  private isSecretInStorageSubject = new BehaviorSubject<boolean>(false);
  private walletSubject = new BehaviorSubject<Wallet>(null);
  private wallet: Wallet;

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

  getTransactionHistory = (slpAddress: string, cashAddress: string) => {
    return from(AddressTxHistory.create(slpAddress, cashAddress));
  };

  sendBch = (address: string, amount: BigNumber) => {
    console.log(address, amount);
    this.notificationService.showNotification(
      `Trying to send ${amount} BCH to <a href="https://explorer.bitcoin.com/bch/address/${address}">
      ${generateShortId(address)}</a>`,
    );

    this.walletSubject.pipe(take(1)).subscribe(async wallet => {
      const sats = convertBchToSats(amount);
      const satsMinusFee = sats.minus(feeSendNonToken(wallet, sats));
      const item = sendToAddressTx(wallet, address, satsMinusFee);
      const broadcast = await item.broadcast();
      this.showBroadcastResultNotification(broadcast);

      this.emitWallet();
    });
  };

  sendToken = (
    address: string,
    amount: BigNumber,
    tokenId: string,
    name: string,
  ) => {
    console.log(address, amount, tokenId);

    this.notificationService.showNotification(
      `Trying to send ${amount} ${name} to <a href="https://explorer.bitcoin.com/bch/address/${address}">
      ${generateShortId(address)}</a>`,
    );

    this.walletSubject.pipe(take(1)).subscribe(async wallet => {
      const item = sendTokensToAddressTx(wallet, address, tokenId, amount);
      const broadcast = await item.broadcast();
      this.showBroadcastResultNotification(broadcast);

      this.emitWallet();
    });
  };

  getBchFee = (amount: BigNumber) => {
    return feeSendNonToken(this.wallet, amount);
  };

  getTokenFee = (tokenId: string, amount: BigNumber) => {
    return feeSendToken(this.wallet, tokenId, amount);
  };

  getWif = () => {
    return this.wallet.privateKey().wif();
  };

  generateNewWallet = () => {
    Wallet.storeRandomSecret();
    this.loadWallet();
  };

  createBuyOffer = async (
    utxo: UtxoEntry,
    params: TradeOfferParams,
    decimals: number,
  ) => {
    const tokenFactor = new BigNumber(10).pow(decimals);
    const verification = verifyAdvancedTradeOffer(
      this.wallet,
      tokenFactor,
      params,
    );
    if (!verification.success) {
      this.notificationService.showNotification('Error: ' + verification.msg);
      return;
    }
    const offer = acceptTradeOfferTx(this.wallet, utxo, params, {
      decimals,
    });
    console.log(offer);

    try {
      const broadcast = await offer.broadcast();
      this.showBroadcastResultNotification(broadcast);
    } catch (e) {
      console.log(e);
    }
  };

  createSellOffer = async (params: TradeOfferParams, decimals: number) => {
    return new Promise(async resolve => {
      const tokenFactor = new BigNumber(10).pow(decimals);
      const verification = verifyAdvancedTradeOffer(
        this.wallet,
        tokenFactor,
        params,
      );

      if (!verification.success) {
        this.notificationService.showNotification('Error: ' + verification.msg);
        setTimeout(() => resolve(false), 1000);
        return;
      }

      const offer = createAdvancedTradeOfferTxs(
        this.wallet,
        tokenFactor,
        params,
      );

      const broadcast1 = await offer[0].broadcast();

      if (!broadcast1.success) {
        this.showBroadcastResultNotification(broadcast1);
        setTimeout(() => resolve(false), 1000);
        return;
      }

      const broadcast2 = await offer[1].broadcast();
      this.showBroadcastResultNotification(broadcast2);
      setTimeout(() => resolve(true), 1000);
    });
  };

  cancelSellOffer = (
    utxo: UtxoEntry,
    params: TradeOfferParams,
    decimals: number,
  ) => {
    return new Promise(resolve => {
      const cancelTx = cancelTradeOfferTx(this.wallet, utxo, params, {
        decimals,
      });

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

  private loadWallet = async () => {
    this.isSecretInStorageSubject.next(Wallet.isSecretInStorage());

    this.listenIsSecretInStorage.subscribe(async isInStorage => {
      if (!isInStorage) {
        return;
      }

      this.wallet = await Wallet.loadFromStorage();

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

  private emitWallet = () => {
    this.walletSubject.next(this.wallet);
  };

  private showBroadcastResultNotification = (broadcast: BroadcastResult) => {
    if (broadcast.success === false) {
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
