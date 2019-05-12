import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WrapperModule } from '../../wrapper/wrapper.module';
import { LandingContentComponent } from './landing-content/landing-content.component';
import { LandingDonateComponent } from './landing-donate/landing-donate.component';
import { LandingRecentComponent } from './landing-recent/landing-recent.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingTeamComponent } from './landing-team/landing-team.component';
import { LandingComponent } from './landing.component';
import { QuickOfferComponent } from './quick-offer/quick-offer.component';

@NgModule({
  declarations: [
    LandingComponent,
    QuickOfferComponent,
    LandingContentComponent,
    LandingRecentComponent,
    LandingTeamComponent,
    LandingDonateComponent,
  ],
  imports: [CommonModule, RouterModule, LandingRoutingModule, WrapperModule],
})
export class LandingModule {}
