import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WrapperModule } from '../../wrapper/wrapper.module';
import { BalanceRoutingModule } from './balance-routing.module';
import { BalanceComponent } from './balance.component';

@NgModule({
  declarations: [BalanceComponent],
  imports: [CommonModule, BalanceRoutingModule, WrapperModule],
})
export class BalanceModule {}
