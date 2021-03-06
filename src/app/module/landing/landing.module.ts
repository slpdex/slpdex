import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountUpModule } from 'countup.js-angular2';
import { ButtonModule } from '../../button/button.module';
import { CoinCardModule } from '../../coin-card/coin-card.module';
import { IconModule } from '../../icon/icon.module';
import { JdenticonModule } from '../../jdenticon/jdenticon.module';
import { WidgetModule } from '../../widget/widget.module';
import { WrapperModule } from '../../wrapper/wrapper.module';
import { LandingContentComponent } from './landing-content/landing-content.component';
import { LandingDonateComponent } from './landing-donate/landing-donate.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingTeamComponent } from './landing-team/landing-team.component';
import { LandingComponent } from './landing.component';
import { QuickOfferComponent } from './quick-offer/quick-offer.component';
import { LandingTopComponent } from './landing-top/landing-top.component';

@NgModule({
  declarations: [
    LandingComponent,
    QuickOfferComponent,
    LandingContentComponent,
    LandingTopComponent,
    LandingTeamComponent,
    LandingDonateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoinCardModule,
    IconModule,
    CountUpModule,
    JdenticonModule,
    WidgetModule,
    LandingRoutingModule,
    ButtonModule,
    WrapperModule,
  ],
})
export class LandingModule {}
