import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import * as cb from 'cashcontracts-bch';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletDetailsComponent implements OnInit {
  wallet: cb.Wallet;

  bchBalance$ = new BehaviorSubject('0.00000000');

  cashAddress$ = new Subject();
  slpAddress$ = new Subject();
  transactions$ = new Subject();

  constructor() {}

  ngOnInit() {
    this.loadWallet();
  }

  loadWallet = async () => {
    this.wallet = await cb.Wallet.loadFromStorage();
    console.log(this.wallet);

    this.cashAddress$.next(this.wallet.cashAddr());
    this.slpAddress$.next(this.wallet.slpAddr());

    // this.setTransactions();
    this.setBchBalance();
  };

  private setTransactions = () => {
    const utxos = this.wallet['utxos'];

    if (utxos && utxos._tail && utxos._tail.array && utxos._tail.array) {
      this.transactions$.next(utxos._tail.array);
    }
  };

  private setBchBalance = () => {
    const value = new BigNumber(this.wallet.nonTokenBalance());

    this.bchBalance$.next(this.convertSatsToBch(value).toString());
  };

  private convertSatsToBch = (sats: BigNumber) => {
    return sats.dividedBy(10000000).decimalPlaces(8);
  };
}
