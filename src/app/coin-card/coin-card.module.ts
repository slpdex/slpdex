import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinCardComponent } from './coin-card.component';
import { WidgetModule } from '../widget/widget.module';
import { PipeModule } from '../pipe/pipe.module';

@NgModule({
  declarations: [CoinCardComponent],
  imports: [CommonModule, WidgetModule, PipeModule],
  exports: [CoinCardComponent],
})
export class CoinCardModule {}
