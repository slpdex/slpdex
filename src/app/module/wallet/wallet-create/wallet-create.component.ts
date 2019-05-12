import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as cc from 'cashcontracts';
import { Router } from '@angular/router';
import { SLPRoutes } from '../../../slp-routes';

@Component({
  selector: 'app-wallet-create',
  templateUrl: './wallet-create.component.html',
  styleUrls: ['./wallet-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletCreateComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    if (cc.Wallet.isSecretInStorage()) {
      this.navigateToWallet();
    }
  }

  create = async () => {
    cc.Wallet.storeRandomSecret();
    this.navigateToWallet();
  };

  navigateToWallet = () => {
    this.router.navigate([`${SLPRoutes.wallet}/${SLPRoutes.walletDetails}`]);
  };
}
