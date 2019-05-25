import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalModule } from '../../modal/modal.module';
import { WidgetModule } from '../../widget/widget.module';
import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';
import { WrapperModule } from '../../wrapper/wrapper.module';
import { IconModule } from '../icon/icon.module';
import { OfferItemComponent } from './offer-item/offer-item.component';

@NgModule({
  declarations: [OfferComponent, OfferItemComponent],
  imports: [
    CommonModule,
    OfferRoutingModule,
    ModalModule,
    WidgetModule,
    WrapperModule,
    IconModule,
  ],
})
export class OfferModule {}
