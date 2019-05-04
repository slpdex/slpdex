import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceRoutingModule } from './balance-routing.module';
import { BalanceComponent } from './balance.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BalanceComponent],
  imports: [CommonModule, BalanceRoutingModule, SharedModule],
})
export class BalanceModule {}
