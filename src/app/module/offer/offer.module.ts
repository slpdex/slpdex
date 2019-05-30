import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../../icon/icon.module';
import { ModalModule } from '../../modal/modal.module';
import { WidgetModule } from '../../widget/widget.module';
import { WrapperModule } from '../../wrapper/wrapper.module';
import { OfferItemComponent } from './offer-item/offer-item.component';
import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';

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
