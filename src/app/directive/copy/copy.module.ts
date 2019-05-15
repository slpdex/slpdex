import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyDirective } from './copy.directive';

@NgModule({
  declarations: [CopyDirective],
  imports: [CommonModule],
  exports: [CopyDirective],
})
export class CopyModule {}
