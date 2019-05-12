import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { CashContractsService } from '../../cash-contracts.service';
import { SLPRoutes } from '../../slp-routes';

@Injectable({
  providedIn: 'root',
})
export class WalletGuard implements CanActivate {
  constructor(
    private router: Router,
    private cashContractsService: CashContractsService,
  ) {}

  canActivate() {
    return this.checkIfUserHasWallet();
  }

  checkIfUserHasWallet = () => {
    this.cashContractsService.listenIsSecretInStorage
      .pipe(take(1))
      .subscribe(isInStorage => {
        if (!isInStorage) {
          this.router.navigate([
            `${SLPRoutes.wallet}/${SLPRoutes.walletCreate}`,
          ]);
        }
      });

    return true;
  };
}
