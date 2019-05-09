import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SLPRoutes } from '../slp-routes';
import * as cb from 'cashcontracts-bch';

@Injectable({
  providedIn: 'root',
})
export class WalletGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    return this.checkIfUserHasWallet();
  }

  checkIfUserHasWallet = () => {
    if (!cb.Wallet.isSecretInStorage()) {
      this.router.navigate([`${SLPRoutes.wallet}/${SLPRoutes.walletCreate}`]);
    }

    return true;
  };
}
