import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import * as cc from 'cashcontracts';
import { BehaviorSubject, Subject, forkJoin, combineLatest } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { EndpointsService } from '../../../endpoints.service';
import { Router } from '@angular/router';
import { SLPRoutes } from '../../../slp-routes';
import BigNumber from 'bignumber.js';
import { convertSatsToBch, generateShortId } from '../../../helpers';
import { WalletSendSelected } from '../wallet-send/wallet-send.component';
import { CashContractsService } from '../../../cash-contracts.service';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletDetailsComponent implements OnInit, OnDestroy {
  bchBalance$ = new BehaviorSubject('0.00000000');
  usdPrice$ = new BehaviorSubject<string>('0');

  transactions$ = new BehaviorSubject([]);
  tokens$ = new BehaviorSubject([]);

  slpRoutes = { ...SLPRoutes };

  private destroy$ = new Subject();

  private usdPrice = 0;
  private wallet: cc.Wallet;

  constructor(
    private endpointsService: EndpointsService,
    private router: Router,
    private cashContractsService: CashContractsService,
  ) {}

  ngOnInit() {
    this.cashContractsService.listenWallet
      .pipe(takeUntil(this.destroy$))
      .subscribe(wallet => {
        if (!wallet) {
          return;
        }

        this.wallet = wallet;
        this.setBchBalance();
        this.setTokens();
      });

    this.endpointsService
      .getBchUsdPrice()
      .pipe(take(1))
      .subscribe(usdPrice => {
        this.usdPrice = +usdPrice.ticker.price;

        this.bchBalance$.pipe(takeUntil(this.destroy$)).subscribe(bch => {
          const usdPriceForBch = new BigNumber(this.usdPrice * +bch);
          this.usdPrice$.next(usdPriceForBch.decimalPlaces(5).toString());
        });
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  openSendToken = (token: {
    balance: number;
    id: string;
    timestamp: string;
    symbol: string;
    name: string;
    documentUri: string;
    documentHash: string;
    decimals: number;
    initialTokenQty: number;
  }) => {
    this.router.navigate([`${SLPRoutes.wallet}/${SLPRoutes.walletSend}`], {
      state: {
        selected: {
          name: token.name,
          balance: token.balance,
          tokenId: token.id,
          isToken: true,
        } as WalletSendSelected,
      },
    });
  };

  trackById = (index: number, token) => {
    return token.id;
  };

  private setTokens = () => {
    const tokenIds = this.wallet.tokenIds();

    const tokens = tokenIds.map(tokenId => {
      return {
        ...this.wallet.tokenDetails(tokenId),
        balance: this.wallet.tokenBalance(tokenId),
        shortId: generateShortId(tokenId),
      };
    });

    this.tokens$.next(tokens.toArray());
  };

  private setBchBalance = () => {
    const value = new BigNumber(this.wallet.nonTokenBalance());
    const bchBalance = convertSatsToBch(value).toFixed(8);
    this.bchBalance$.next(bchBalance);
  };

  // private setTransactions = () => {
  //   const utxos = this.wallet['utxos'];

  //   if (utxos && utxos._tail && utxos._tail.array && utxos._tail.array) {
  //     this.transactions$.next(utxos._tail.array);
  //   }
  // };
}
