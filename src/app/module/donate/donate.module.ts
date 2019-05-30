import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../../button/button.module';
import { CopyModule } from '../../directive/copy/copy.module';
import { IconModule } from '../../icon/icon.module';
import { ModalModule } from '../../modal/modal.module';
import { WidgetModule } from '../../widget/widget.module';
import { WrapperModule } from '../../wrapper/wrapper.module';
import { DonateRoutingModule } from './donate-routing.module';
import { DonateComponent } from './donate.component';

@NgModule({
  declarations: [DonateComponent],
  imports: [
    CommonModule,
    WrapperModule,
    ModalModule,
    CopyModule,
    IconModule,
    DonateRoutingModule,
    WidgetModule,
    ButtonModule,
  ],
})
export class DonateModule {}
