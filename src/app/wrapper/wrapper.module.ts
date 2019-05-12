import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WrapperComponent } from './wrapper.component';

@NgModule({
  declarations: [WrapperComponent],
  imports: [CommonModule],
  exports: [WrapperComponent],
})
export class WrapperModule {}
