import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './landing.component';
import { QuickOrderComponent } from './quick-order/quick-order.component';
import { LandingContentComponent } from './landing-content/landing-content.component';

@NgModule({
  declarations: [LandingComponent, QuickOrderComponent, LandingContentComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class LandingModule {}
