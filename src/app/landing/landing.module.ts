import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LandingContentComponent } from './landing-content/landing-content.component';
import { LandingDonateComponent } from './landing-donate/landing-donate.component';
import { LandingRecentComponent } from './landing-recent/landing-recent.component';
import { LandingTeamComponent } from './landing-team/landing-team.component';
import { LandingComponent } from './landing.component';
import { QuickOrderComponent } from './quick-order/quick-order.component';

@NgModule({
  declarations: [
    LandingComponent,
    QuickOrderComponent,
    LandingContentComponent,
    LandingRecentComponent,
    LandingTeamComponent,
    LandingDonateComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class LandingModule {}
