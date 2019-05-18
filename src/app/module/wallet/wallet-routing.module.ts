import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SLPRoutes } from '../../slp-routes';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';
import { WalletDetailsComponent } from './wallet-details/wallet-details.component';
import { WalletExportComponent } from './wallet-export/wallet-export.component';
import { WalletReceiveComponent } from './wallet-receive/wallet-receive.component';
import { WalletSendComponent } from './wallet-send/wallet-send.component';
import { WalletComponent } from './wallet.component';
import { WalletGuard } from './wallet.guard';

const routes: Routes = [
  {
    path: '',
    component: WalletComponent,
    children: [
      {
        path: SLPRoutes.walletCreate,
        component: WalletCreateComponent,
      },
      {
        path: '',
        component: WalletDetailsComponent,
        canActivate: [WalletGuard],
      },
      {
        path: SLPRoutes.walletReceive,
        component: WalletReceiveComponent,
        canActivate: [WalletGuard],
      },
      {
        path: SLPRoutes.walletSend,
        component: WalletSendComponent,
        canActivate: [WalletGuard],
      },
      {
        path: SLPRoutes.walletExport,
        component: WalletExportComponent,
        canActivate: [WalletGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletRoutingModule {}
