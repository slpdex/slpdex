import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import * as cc from 'cashcontracts';
import { TokenDetails } from 'cashcontracts';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { CashContractsService } from '../../../cash-contracts.service';
import { EndpointsService } from '../../../endpoints.service';
import {
  convertBchToSats,
  convertSatsToBch,
  generateShortId,
} from '../../../helpers';

export interface WalletSendSelected {
  name: string;
  balance: number;
  isToken: boolean;
  tokenId?: string;
}

interface TokenDetailsExtended extends TokenDetails {
  balance: number;
  shortId: string;
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

  bchDetails$ = new BehaviorSubject<TokenDetailsExtended>(null);
  tokens$ = new BehaviorSubject<TokenDetailsExtended[]>([]);

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
      this.cashContractsService.listenWallet.pipe(takeUntil(this.destroy$)),
      this.endpointsService.getBchUsdPrice().pipe(take(1)),
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(values => {
        const [wallet, usd] = values;

        this.wallet = wallet;
        this.usd = +usd.ticker.price || 0;

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
      balance,
      isToken: false,
    });

    this.selectedAmount = balance;
    this.setFee();
  };

  selectToken = (token: TokenDetailsExtended) => {
    this.selected$.next({
      name: token.name,
      balance: token.balance,
      isToken: true,
      tokenId: token.id,
    });

    this.selectedAmount = token.balance;
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
          this.selectedAmount,
          selected.tokenId,
          selected.name,
        );
      } else {
        this.cashContractsService.sendBch(
          this.selectedAddress,
          this.selectedAmount,
        );
      }
    });
  };

  setMax = () => {
    this.selected$.pipe(take(1)).subscribe(selected => {
      this.selectedAmount = selected.balance;
    });
  };

  setFee = () => {
    this.selected$.pipe(take(1)).subscribe(selected => {
      let sats = 0;

      if (selected.isToken) {
        sats = this.cashContractsService.getTokenFee(
          selected.tokenId,
          this.selectedAmount || 0,
        );
      } else {
        sats = this.cashContractsService.getBchFee(
          convertBchToSats(this.selectedAmount || 0),
        );
      }

      this.fee = convertSatsToBch(sats) * this.usd;
    });
  };

  private handleWallet = () => {
    const bchItem = {
      name: 'Bitcoin Cash',
      symbol: 'BCH',
      balance: convertSatsToBch(this.wallet.nonTokenBalance()),
    } as TokenDetailsExtended;

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

      this.selectedAmount = this.initSelected.balance;
    } else {
      this.selected$.next({
        name: bchItem.name,
        balance: bchItem.balance,
        isToken: false,
      });
      this.selectedAmount = bchItem.balance;
    }

    this.setFee();
  };

  private setTokens = async () => {
    const tokenIds = await this.wallet.tokenIds();

    console.log(tokenIds);

    const tokens = tokenIds.map(id => {
      return {
        ...this.wallet.tokenDetails(id),
        balance: this.wallet.tokenBalance(id),
        shortId: generateShortId(id),
        isToken: true,
      } as TokenDetailsExtended;
    });

    this.tokens$.next(tokens.toArray());
  };
}
