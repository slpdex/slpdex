import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BchSeparatorPipe } from './bch-separator.pipe';
import { UsdFormatterPipe } from './usd-formatter.pipe';

@NgModule({
  declarations: [BchSeparatorPipe, UsdFormatterPipe],
  imports: [CommonModule],
  exports: [BchSeparatorPipe, UsdFormatterPipe],
})
export class PipeModule {}
