import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SLPRoutes } from '../../slp-routes';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';
import { WalletDetailsComponent } from './wallet-details/wallet-details.component';
import { WalletReceiveComponent } from './wallet-receive/wallet-receive.component';
import { WalletGuard } from './wallet.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: SLPRoutes.walletDetails,
  },
  {
    path: SLPRoutes.walletDetails,
    component: WalletDetailsComponent,
    canActivate: [WalletGuard],
  },
  {
    path: SLPRoutes.walletCreate,
    component: WalletCreateComponent,
  },
  {
    path: SLPRoutes.walletReceive,
    component: WalletReceiveComponent,
    canActivate: [WalletGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletRoutingModule {}
