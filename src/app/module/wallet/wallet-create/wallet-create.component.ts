import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CashContractsService } from '../../../cash-contracts.service';
import { SLPRoutes } from '../../../slp-routes';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-wallet-create',
  templateUrl: './wallet-create.component.html',
  styleUrls: ['./wallet-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletCreateComponent implements OnInit {
  isSecretInStorage = false;
  slpRoutes = { ...SLPRoutes };

  constructor(
    private router: Router,
    private cashContractsService: CashContractsService,
  ) {}

  ngOnInit() {
    this.cashContractsService.listenIsSecretInStorage
      .pipe(take(1))
      .subscribe(isSecretInStorage => {
        this.isSecretInStorage = isSecretInStorage;
      });
  }

  create = () => {
    localStorage.removeItem('secret');
    this.cashContractsService.generateNewWallet();
    this.navigateToWallet();
  };

  private navigateToWallet = () => {
    this.router.navigate([SLPRoutes.wallet]);
  };
}
