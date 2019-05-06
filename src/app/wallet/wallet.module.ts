import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WalletComponent],
  imports: [CommonModule, WalletRoutingModule, SharedModule],
})
export class WalletModule {}
