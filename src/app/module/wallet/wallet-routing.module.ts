import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletGuard } from './wallet.guard';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';
import { SLPRoutes } from '../../slp-routes';
import { WalletDetailsComponent } from './wallet-details/wallet-details.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletRoutingModule {}
