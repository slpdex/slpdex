import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import BigNumber from 'bignumber.js';
import { Wallet } from 'cashcontracts';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { CashContractsService } from '../../cash-contracts.service';
import { CoinCard } from '../../coin-card/coin-card.component';
import { EndpointsService } from '../../endpoints.service';
import { convertSatsToBch } from '../../helpers';
import { SLPRoutes } from '../../slp-routes';
import { StorageService } from '../../storage.service';
import { WalletSendSelected } from './wallet-send/wallet-send.component';

interface CoinCardExtended extends CoinCard {
  txId: string;
}
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletComponent implements OnInit, OnDestroy {
  bchBalance$ = new BehaviorSubject(+'0.00000000');
  usdPrice$ = new BehaviorSubject<string>('0');
  isLoading$ = new BehaviorSubject<boolean>(true);

  tokens$ = new BehaviorSubject<CoinCard[]>([]);

  history: CoinCardExtended[] = [];

  history$: Observable<CoinCardExtended[]>;

  slpRoutes = { ...SLPRoutes };

  private destroy$ = new Subject();

  private usdPrice = 0;
  private wallet: Wallet;

  constructor(
    private endpointsService: EndpointsService,
    private router: Router,
    private cashContractsService: CashContractsService,
    private storageService: StorageService,
  ) {}

  ngOnInit() {
    this.cashContractsService.getWallet
      .pipe(takeUntil(this.destroy$))
      .subscribe(wallet => {
        if (!wallet) {
          return;
        }

        this.isLoading$.next(false);

        this.wallet = wallet;
        this.setBchBalance();
        this.setWalletTokens();
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

    this.history$ = this.storageService.txHistory$.pipe(
      switchMap(async history => {
        if (!history) {
          return [];
        }

        let balance = 0;

        history.addTxHistory.forEach(item => {
          if (item.deltaSatoshis) {
            balance += item.deltaSatoshis;
          }
        });

        this.bchBalance$.next(
          convertSatsToBch(new BigNumber(balance)).toNumber(),
        );

        const moment = await import('moment');

        return (history.addTxHistory || []).map<CoinCardExtended>(item => {
          const sharedProps = {
            timeSince: item.timestamp
              ? moment.unix(item.timestamp).fromNow()
              : 'Unconfirmed',
            enableBalanceColor: true,
            txId: item.tokenIdHex,
          } as CoinCardExtended;

          if (
            (item.deltaTokenBase && +item.deltaTokenBase > 0) ||
            +item.deltaTokenBase < 0
          ) {
            return {
              ...sharedProps,
              name: 'TokenName (WIP)',
              isToken: true,
              id: item.tokenIdHex,
              symbol: 'Symbol (WIP)',
              balance: new BigNumber(item.deltaTokenBase).div(1000),
            };
          }

          return {
            ...sharedProps,
            name: 'Bitcoin Cash',
            balance: convertSatsToBch(
              new BigNumber(item.deltaSatoshis).div(10),
            ),
          };
        });
      }),
    );
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

  trackById = (_: number, token) => {
    return token.id;
  };

  openTxExplorer = (item: CoinCardExtended) => {
    window.open(`https://explorer.bitcoin.com/bch/tx/${item.txId}`, '_blank');
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
