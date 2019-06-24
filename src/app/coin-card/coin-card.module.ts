import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinCardComponent } from './coin-card.component';
import { WidgetModule } from '../widget/widget.module';
import { PipeModule } from '../pipe/pipe.module';
import { JdenticonModule } from '../jdenticon/jdenticon.module';
import { ButtonModule } from '../button/button.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CoinCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    WidgetModule,
    PipeModule,
    JdenticonModule,
    ButtonModule,
  ],
  exports: [CoinCardComponent],
})
export class CoinCardModule {}
