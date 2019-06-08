import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import BigNumber from 'bignumber.js';
import * as cc from 'cashcontracts';
import { BehaviorSubject, Subject } from 'rxjs';
import { take, takeUntil, map } from 'rxjs/operators';
import { CashContractsService } from '../../../cash-contracts.service';
import { CoinCard } from '../../../coin-card/coin-card.component';
import { EndpointsService } from '../../../endpoints.service';
import { convertSatsToBch } from '../../../helpers';
import { SLPRoutes } from '../../../slp-routes';
import { WalletSendSelected } from '../wallet-send/wallet-send.component';

interface CoinCardExtended extends CoinCard {
  txId: string;
}

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletDetailsComponent implements OnInit, OnDestroy {
  bchBalance$ = new BehaviorSubject(+'0.00000000');
  usdPrice$ = new BehaviorSubject<string>('0');
  isLoading$ = new BehaviorSubject<boolean>(true);

  transactions$ = new BehaviorSubject([]);
  tokens$ = new BehaviorSubject<CoinCard[]>([]);

  history: CoinCardExtended[] = [];

  slpRoutes = { ...SLPRoutes };

  private destroy$ = new Subject();

  private usdPrice = 0;
  private wallet: cc.Wallet;

  constructor(
    private endpointsService: EndpointsService,
    private router: Router,
    private cashContractsService: CashContractsService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.cashContractsService.listenWallet
      .pipe(takeUntil(this.destroy$))
      .subscribe(wallet => {
        if (!wallet) {
          return;
        }

        this.isLoading$.next(false);

        this.wallet = wallet;
        this.setBchBalance();
        this.setWalletTokens();
        this.setHistory();
      });

    this.endpointsService.bchUsdPrice
      .pipe(takeUntil(this.destroy$))
      .subscribe(price => {
        this.usdPrice = price;

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
    balance: BigNumber;
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
          symbol: token.symbol,
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

  openTxExplorer = (item: CoinCardExtended) => {
    window.open(`https://explorer.bitcoin.com/bch/tx/${item.txId}`, '_blank');
  };

  private setHistory = () => {
    this.cashContractsService
      .getTransactionHistory(this.wallet.slpAddr(), this.wallet.cashAddr())
      .pipe(
        take(1),
        map(items => {
          return items
            .txHistory()
            .toArray()
            .slice(0, 10);
        }),
      )
      .subscribe(async historyItems => {
        const moment = await import('moment');

        this.history = historyItems.map(item => {
          const txId = item[0];
          const historyItem = item[1];

          let newItem = {
            timeSince: moment.unix(historyItem.timestamp).fromNow(),
            enableBalanceColor: true,
            txId,
          } as CoinCardExtended;

          if (
            historyItem.deltaBaseToken &&
            (historyItem.deltaBaseToken.lt(0) ||
              historyItem.deltaBaseToken.gt(0))
          ) {
            const tokenDetails = this.wallet.tokenDetails(historyItem.tokenId);

            newItem = {
              ...newItem,
              name: tokenDetails.name,
              isToken: true,
              id: tokenDetails.id,
              balance: historyItem.deltaBaseToken.div(1000),
              symbol: tokenDetails.symbol,
            } as CoinCardExtended;
          } else {
            newItem = {
              ...newItem,
              name: 'Bitcoin Cash',
              balance: convertSatsToBch(historyItem.deltaSatoshis.div(10)),
            };
          }

          return newItem;
        });

        this.changeDetectorRef.markForCheck();
      });
  };

  private setWalletTokens = () => {
    const tokenIds = this.wallet.tokenIds();

    const tokens = tokenIds.map(tokenId => {
      return {
        ...this.wallet.tokenDetails(tokenId),
        balance: this.wallet.tokenBalance(tokenId),
        isToken: true,
      };
    });

    this.tokens$.next(tokens.toArray());
  };

  private setBchBalance = () => {
    const value = this.wallet.nonTokenBalance();
    const bchBalance = convertSatsToBch(value);
    this.bchBalance$.next(bchBalance.toNumber());
  };
}
