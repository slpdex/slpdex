import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BchSeparatorPipe } from './bch-separator.pipe';
import { UsdFormatterPipe } from './usd-formatter.pipe';
import { SatsToBchPipe } from './sats-to-bch.pipe';

@NgModule({
  declarations: [BchSeparatorPipe, UsdFormatterPipe, SatsToBchPipe],
  imports: [CommonModule],
  exports: [BchSeparatorPipe, UsdFormatterPipe, SatsToBchPipe],
})
export class PipeModule {}
