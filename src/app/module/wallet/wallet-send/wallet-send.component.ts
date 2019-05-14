import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import * as cc from 'cashcontracts';
import { TokenDetails } from 'cashcontracts';
import { BehaviorSubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { CashContractsService } from '../../../cash-contracts.service';
import { convertSatsToBch, generateShortId } from '../../../helpers';

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
  selected: WalletSendSelected;
  selected$ = new BehaviorSubject<WalletSendSelected>({} as WalletSendSelected);

  bchDetails$ = new BehaviorSubject<TokenDetailsExtended>(null);
  tokens$ = new BehaviorSubject<TokenDetailsExtended[]>([]);

  selectedAddress = '';
  selectedAmount = 0;

  wallet: cc.Wallet;

  private destroy$ = new Subject();

  constructor(
    private cashContractsService: CashContractsService,
    private router: Router,
  ) {
    const state = this.router.getCurrentNavigation().extras.state;

    if (state) {
      this.selected = this.router.getCurrentNavigation().extras.state.selected;
    }
  }

  ngOnInit() {
    this.cashContractsService.listenWallet
      .pipe(takeUntil(this.destroy$))
      .subscribe(async wallet => {
        if (!wallet) {
          return;
        }

        this.wallet = wallet;

        const bchItem = {
          name: 'Bitcoin Cash',
          symbol: 'BCH',
          balance: convertSatsToBch(wallet.nonTokenBalance()),
        } as TokenDetailsExtended;

        this.bchDetails$.next(bchItem);

        if (this.selected && this.selected.name) {
          this.selected$.next({
            name: this.selected.name,
            balance: this.selected.balance,
            isToken: true,
            tokenId: this.selected.tokenId,
          });

          this.selectedAmount = this.selected.balance;
        } else {
          this.selected$.next({
            name: bchItem.name,
            balance: bchItem.balance,
            isToken: false,
          });
          this.selectedAmount = bchItem.balance;
        }

        const tokenIds = await wallet.tokenIds();

        const tokens = tokenIds.map(id => {
          return {
            ...wallet.tokenDetails(id),
            balance: wallet.tokenBalance(id),
            shortId: generateShortId(id),
            isToken: true,
          } as TokenDetailsExtended;
        });

        this.tokens$.next(tokens.toArray());
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
  };

  selectToken = (token: TokenDetailsExtended) => {
    this.selected$.next({
      name: token.name,
      balance: token.balance,
      isToken: true,
      tokenId: token.id,
    });

    this.selectedAmount = token.balance;
  };

  send = () => {
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
}
