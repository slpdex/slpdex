import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BchSeparatorPipe } from './bch-separator.pipe';

@NgModule({
  declarations: [BchSeparatorPipe],
  imports: [CommonModule],
  exports: [BchSeparatorPipe],
})
export class PipeModule {}
