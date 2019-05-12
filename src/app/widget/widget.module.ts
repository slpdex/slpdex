import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget.component';

@NgModule({
  declarations: [WidgetComponent],
  imports: [CommonModule],
  exports: [WidgetComponent],
})
export class WidgetModule {}
