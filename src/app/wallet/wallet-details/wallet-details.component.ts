import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import BigNumber from 'bignumber.js';
import * as cb from 'cashcontracts-bch';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EndpointsService } from '../../endpoints.service';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletDetailsComponent implements OnInit, OnDestroy {
  isLoading = true;

  destroy$ = new Subject();

  bchBalance$ = new BehaviorSubject('0.00000000');
  usdPrice$ = new BehaviorSubject<string>('0');

  cashAddress$ = new Subject();
  slpAddress$ = new Subject();
  transactions$ = new Subject();
  tokens$ = new Subject();

  private usdPrice = 0;
  private wallet: cb.Wallet;

  constructor(private endpointsService: EndpointsService) {}

  ngOnInit() {
    this.loadWallet();

    this.bchBalance$.pipe(takeUntil(this.destroy$)).subscribe(bch => {
      const usdPriceForBch = new BigNumber(this.usdPrice * +bch);
      this.usdPrice$.next(usdPriceForBch.decimalPlaces(5).toString());
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  loadWallet = async () => {
    const values = await Promise.all([
      cb.Wallet.loadFromStorage(),
      this.endpointsService.getBchUsdPrice().toPromise(),
    ]);

    this.isLoading = false;

    this.wallet = values[0];
    this.usdPrice = +values[1].ticker.price;
    console.log(this.wallet);

    this.cashAddress$.next(this.wallet.cashAddr());
    this.slpAddress$.next(this.wallet.slpAddr());

    // this.setTransactions();

    this.setBchBalance();
    this.setTokens();
  };

  private setTokens = () => {
    const tokenIds = this.wallet.tokenIds();
    console.log(tokenIds);

    const tokens = tokenIds.map(tokenId => {
      return {
        ...this.wallet.tokenDetails(tokenId),
        balance: this.wallet.tokenBalance(tokenId),
      };
    });

    this.tokens$.next(tokens.toArray());
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
