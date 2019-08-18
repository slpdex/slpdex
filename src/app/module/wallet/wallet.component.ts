import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import BigNumber from 'bignumber.js';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
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

  history$: Observable<CoinCardExtended[]>;

  slpRoutes = { ...SLPRoutes };

  private destroy$ = new Subject();

  constructor(
    private endpointsService: EndpointsService,
    private router: Router,
    private storageService: StorageService,
  ) {}

  ngOnInit() {
    this.loadBalance();
    this.loadHistory();
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

  private loadBalance = () => {
    combineLatest([
      this.endpointsService.bchUsdPrice,
      this.storageService.addressUtxo$,
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(values => {
        const [bchUsdPrice, addressUtxo] = values;

        if (!bchUsdPrice || !addressUtxo) {
          return;
        }

        const bchSatsBalance = addressUtxo.addUtxos
          .map(addUtxo => {
            const isNegativeUtxo = addressUtxo.removeUtxos.find(
              x => x.tx === addUtxo.tx,
            );

            if (isNegativeUtxo) {
              return -(addUtxo.valueSatoshis + +addUtxo.valueToken);
            }

            return addUtxo.valueSatoshis + +addUtxo.valueToken;
          })
          .reduce((prev, current) => prev + current);

        const bchBalance = convertSatsToBch(new BigNumber(bchSatsBalance));
        const usdPriceForBch = new BigNumber(bchUsdPrice).times(bchBalance);

        this.usdPrice$.next(usdPriceForBch.decimalPlaces(5).toString());
        this.bchBalance$.next(bchBalance.toNumber());
      });
  };

  private loadHistory = () => {
    this.history$ = this.storageService.txHistory$.pipe(
      switchMap(async history => {
        if (!history) {
          return [];
        }

        const moment = await import('moment');

        return (history.addTxHistory || []).map<CoinCardExtended>(item => {
          const sharedProps = {
            timeSince: item.timestamp
              ? moment.unix(item.timestamp).fromNow()
              : 'Unconfirmed',
            enableBalanceColor: true,
            txId: item.tx,
            id: item.tokenIdHex,
          } as CoinCardExtended;

          if (
            (item.deltaTokenBase && +item.deltaTokenBase > 0) ||
            +item.deltaTokenBase < 0
          ) {
            return {
              ...sharedProps,
              name: 'TokenName (WIP)',
              isToken: true,
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
  };
}
