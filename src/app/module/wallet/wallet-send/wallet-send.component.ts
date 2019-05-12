import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  Input,
} from '@angular/core';
import BigNumber from 'bignumber.js';
import { TokenDetails } from 'cashcontracts-bch';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { CashContractsService } from '../../../cash-contracts.service';
import { convertSatsToBch } from '../../../helpers';
import * as cb from 'cashcontracts-bch';

export interface WalletSendSelected {
  name: string;
  balance: number;
  tokenId?: string;
  isToken?: boolean;
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
  @Input() selected: WalletSendSelected;
  selected$ = new BehaviorSubject<WalletSendSelected>({} as WalletSendSelected);

  bchDetails$ = new BehaviorSubject<TokenDetailsExtended>(null);
  tokens$ = new BehaviorSubject<TokenDetailsExtended[]>([]);

  selectedAddress = '';
  selectedAmount = 0;

  wallet: cb.Wallet;

  private destroy$ = new Subject();

  constructor(private cashContractsService: CashContractsService) {}

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
          balance: convertSatsToBch(
            new BigNumber(wallet.nonTokenBalance()),
          ).toNumber(),
        } as TokenDetailsExtended;

        this.bchDetails$.next(bchItem);

        if (!this.selected) {
          this.selected$.next({
            name: bchItem.name,
            balance: bchItem.balance,
          });
          this.selectedAmount = bchItem.balance;
        }

        const tokenIds = await wallet.tokenIds();

        const tokens = tokenIds.map(id => {
          return {
            ...wallet.tokenDetails(id),
            balance: wallet.tokenBalance(id),
            shortId: this.generateShortId(id),
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
    const balance = convertSatsToBch(
      new BigNumber(this.wallet.nonTokenBalance()),
    ).toNumber();

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

  generateShortId = (id: string) => {
    const length = id.length;

    return `${id.slice(0, 5)}...${id.slice(length - 4, length)}`;
  };

  send = () => {
    this.selected$.pipe(take(1)).subscribe(selected => {
      if (selected.isToken) {
        this.cashContractsService.sendToken(
          this.selectedAddress,
          this.selectedAmount,
          selected.tokenId,
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
