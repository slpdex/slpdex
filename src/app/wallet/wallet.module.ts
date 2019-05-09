import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';
import { WalletDetailsComponent } from './wallet-details/wallet-details.component';
import { WalletRoutingModule } from './wallet-routing.module';

@NgModule({
  declarations: [WalletCreateComponent, WalletDetailsComponent],
  imports: [CommonModule, WalletRoutingModule, SharedModule],
})
export class WalletModule {}
