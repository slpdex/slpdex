import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinCardComponent } from './coin-card.component';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  declarations: [CoinCardComponent],
  imports: [CommonModule, WidgetModule],
  exports: [CoinCardComponent],
})
export class CoinCardModule {}
