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

export interface WalletSendSelected {
  name: string;
  balance: number;
  isToken?: boolean;
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

  bchDetails$ = new BehaviorSubject<TokenDetails>(null);
  tokens$ = new BehaviorSubject<TokenDetails[]>([]);

  private destroy$ = new Subject();

  constructor(private cashContractsService: CashContractsService) {}

  ngOnInit() {
    this.cashContractsService.listenWallet
      .pipe(takeUntil(this.destroy$))
      .subscribe(async wallet => {
        if (!wallet) {
          return;
        }

        const bchItem = {
          name: 'Bitcoin Cash',
          symbol: 'BCH',
          balance: convertSatsToBch(
            new BigNumber(wallet.nonTokenBalance()),
          ).toNumber(),
        } as TokenDetails & { balance: number };

        this.bchDetails$.next(bchItem);

        if (!this.selected) {
          this.selected$.next({
            name: bchItem.name,
            balance: bchItem.balance,
          });
        }

        const tokenIds = await wallet.tokenIds();

        const tokens = tokenIds.map(id => {
          return {
            ...wallet.tokenDetails(id),
            balance: wallet.tokenBalance(id),
            shortId: this.generateShortId(id),
          } as TokenDetails;
        });

        this.tokens$.next(tokens.toArray());
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  selectBch = () => {};

  selectToken = (token: TokenDetails) => {};

  generateShortId = (id: string) => {
    const length = id.length;

    return `${id.slice(0, 5)}...${id.slice(length - 4, length)}`;
  };
}
