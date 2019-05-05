import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';
import { RouterModule } from '@angular/router';
import { OfferComponent } from './offer/offer.component';

const components = [WrapperComponent, OfferComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
