import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SLPRoutes } from '../../slp-routes';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';
import { WalletExportComponent } from './wallet-export/wallet-export.component';
import { WalletReceiveComponent } from './wallet-receive/wallet-receive.component';
import { WalletSendComponent } from './wallet-send/wallet-send.component';
import { WalletComponent } from './wallet.component';

const routes: Routes = [
  {
    path: '',
    component: WalletComponent,
  },
  {
    path: SLPRoutes.walletCreate,
    component: WalletCreateComponent,
  },
  {
    path: SLPRoutes.walletReceive,
    component: WalletReceiveComponent,
  },
  {
    path: SLPRoutes.walletSend,
    component: WalletSendComponent,
  },
  {
    path: SLPRoutes.walletExport,
    component: WalletExportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletRoutingModule {}
