import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WrapperModule } from '../wrapper/wrapper.module';
import { ModalHeadingComponent } from './modal-heading/modal-heading.component';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent, ModalHeadingComponent],
  imports: [CommonModule, WrapperModule],
  exports: [ModalComponent, ModalHeadingComponent],
})
export class ModalModule {}
