import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortComponent } from './sort.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [SortComponent],
  imports: [CommonModule, IconModule],
  exports: [SortComponent],
})
export class SortModule {}
