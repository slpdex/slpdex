import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from './modal.component';
import { ModalHeadingComponent } from './modal-heading/modal-heading.component';

@NgModule({
  declarations: [ModalComponent, ModalHeadingComponent],
  imports: [CommonModule, SharedModule],
  exports: [ModalComponent, ModalHeadingComponent],
})
export class ModalModule {}
