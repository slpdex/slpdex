import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import BigNumber from 'bignumber.js';
import { TokenDetails } from 'cashcontracts-bch';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CashContractsService } from '../../../cash-contracts.service';
import { convertSatsToBch } from '../../../helpers';

@Component({
  selector: 'app-wallet-send',
  templateUrl: './wallet-send.component.html',
  styleUrls: ['./wallet-send.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletSendComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();

  bchDetails$ = new BehaviorSubject<TokenDetails>(null);
  tokens$ = new BehaviorSubject<TokenDetails[]>([]);

  constructor(private cashContractsService: CashContractsService) {}

  ngOnInit() {
    this.cashContractsService.listenWallet
      .pipe(takeUntil(this.destroy$))
      .subscribe(async wallet => {
        if (!wallet) {
          return;
        }

        this.bchDetails$.next({
          name: 'Bitcoin Cash',
          symbol: 'BCH',
          balance: convertSatsToBch(
            new BigNumber(wallet.nonTokenBalance()),
          ).toNumber(),
        } as TokenDetails & { balance: number });

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

  send = () => {};

  generateShortId = (id: string) => {
    const length = id.length;

    return `${id.slice(0, 5)}...${id.slice(length - 4, length)}`;
  };
}
