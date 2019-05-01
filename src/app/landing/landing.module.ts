import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';
import { QuickOrderComponent } from './quick-order/quick-order.component';

@NgModule({
  declarations: [LandingComponent, QuickOrderComponent],
  imports: [CommonModule, LandingRoutingModule, SharedModule],
})
export class LandingModule {}
