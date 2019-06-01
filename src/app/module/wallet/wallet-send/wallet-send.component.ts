import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import * as cc from 'cashcontracts';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { CashContractsService } from '../../../cash-contracts.service';
import { CoinCard } from '../../../coin-card/coin-card.component';
import { EndpointsService } from '../../../endpoints.service';
import { convertBchToSats, convertSatsToBch } from '../../../helpers';
import BigNumber from 'bignumber.js';

export interface WalletSendSelected {
  name: string;
  balance: BigNumber;
  isToken: boolean;
  tokenId?: string;
}

@Component({
  selector: 'app-wallet-send',
  templateUrl: './wallet-send.component.html',
  styleUrls: ['./wallet-send.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletSendComponent implements OnInit, OnDestroy {
  initSelected: WalletSendSelected;
  selected$ = new BehaviorSubject<WalletSendSelected>({} as WalletSendSelected);

  bchDetails$ = new BehaviorSubject<CoinCard>(null);
  tokens$ = new BehaviorSubject<CoinCard[]>([]);

  selectedAddress = '';
  selectedAmount = 0;
  usd = 0;
  fee = 0;

  wallet: cc.Wallet;

  private destroy$ = new Subject();

  constructor(
    private cashContractsService: CashContractsService,
    private endpointsService: EndpointsService,
    private router: Router,
  ) {
    const state = this.router.getCurrentNavigation().extras.state;

    if (state) {
      this.initSelected = this.router.getCurrentNavigation().extras.state.selected;
    }
  }

  ngOnInit() {
    combineLatest([
      this.cashContractsService.listenWallet,
      this.endpointsService.bchUsdPrice,
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(values => {
        const [wallet, price] = values;

        this.wallet = wallet;
        this.usd = price;

        if (this.wallet) {
          this.handleWallet();
          this.setTokens();
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  selectBch = () => {
    const balance = convertSatsToBch(this.wallet.nonTokenBalance());

    this.selected$.next({
      name: 'Bitcoin Cash',
      balance: balance,
      isToken: false,
    });

    this.selectedAmount = balance.toNumber();
    this.setFee();
  };

  selectToken = (token: CoinCard) => {
    this.selected$.next({
      name: token.name,
      balance: token.balance,
      isToken: true,
      tokenId: token.id,
    });

    this.selectedAmount = token.balance.toNumber();
    this.setFee();
  };

  send = () => {
    if (!this.selectedAddress || !this.selectedAmount) {
      return;
    }

    this.selected$.pipe(take(1)).subscribe(selected => {
      if (selected.isToken) {
        this.cashContractsService.sendToken(
          this.selectedAddress,
          new BigNumber(this.selectedAmount),
          selected.tokenId,
          selected.name,
        );
      } else {
        this.cashContractsService.sendBch(
          this.selectedAddress,
          new BigNumber(this.selectedAmount),
        );
      }
    });
  };

  setMax = () => {
    this.selected$.pipe(take(1)).subscribe(selected => {
      this.selectedAmount = selected.balance.toNumber();
    });
  };

  setFee = () => {
    this.selected$.pipe(take(1)).subscribe(selected => {
      let sats = new BigNumber(0);

      if (selected.isToken) {
        sats = this.cashContractsService.getTokenFee(
          selected.tokenId,
          new BigNumber(this.selectedAmount || 0),
        );
      } else {
        sats = this.cashContractsService.getBchFee(
          convertBchToSats(new BigNumber(this.selectedAmount || 0)),
        );
      }

      this.fee = convertSatsToBch(sats).times(this.usd).toNumber();
    });
  };

  private handleWallet = () => {
    const bchItem: CoinCard = {
      name: 'Bitcoin Cash',
      symbol: 'BCH',
      balance: convertSatsToBch(this.wallet.nonTokenBalance()),
    };

    this.bchDetails$.next(bchItem);

    const tokenIsPreSelectedElseBch =
      this.initSelected && this.initSelected.name;
    if (tokenIsPreSelectedElseBch) {
      this.selected$.next({
        name: this.initSelected.name,
        balance: this.initSelected.balance,
        isToken: true,
        tokenId: this.initSelected.tokenId,
      });

      this.selectedAmount = this.initSelected.balance.toNumber();
    } else {
      this.selected$.next({
        name: bchItem.name,
        balance: bchItem.balance,
        isToken: false,
      });
      this.selectedAmount = bchItem.balance.toNumber();
    }

    this.setFee();
  };

  private setTokens = async () => {
    const tokenIds = await this.wallet.tokenIds();

    const tokens = tokenIds.map(id => {
      return {
        ...this.wallet.tokenDetails(id),
        balance: this.wallet.tokenBalance(id),
        isToken: true,
      } as CoinCard;
    });

    this.tokens$.next(tokens.toArray());
  };
}
