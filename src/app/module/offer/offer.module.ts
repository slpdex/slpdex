import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';

@NgModule({
  declarations: [OfferComponent],
  imports: [CommonModule, OfferRoutingModule],
})
export class OfferModule {}
