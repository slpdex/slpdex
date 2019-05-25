import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../../button/button.module';
import { CoinCardModule } from '../../coin-card/coin-card.module';
import { WidgetModule } from '../../widget/widget.module';
import { WrapperModule } from '../../wrapper/wrapper.module';
import { TokensDetailsComponent } from './tokens-details/tokens-details.component';
import { TokensListComponent } from './tokens-list/tokens-list.component';
import { TokensRoutingModule } from './tokens-routing.module';
import { TokensComponent } from './tokens.component';
import { TokensDetailsOrderbookComponent } from './tokens-details/tokens-details-orderbook/tokens-details-orderbook.component';
import { FormsModule } from '@angular/forms';
import { TokensDetailsSellComponent } from './tokens-details/tokens-details-sell/tokens-details-sell.component';
import { UsdFormatterPipe } from '../../pipe/usd-formatter.pipe';
import { PipeModule } from '../../pipe/pipe.module';

@NgModule({
  declarations: [
    TokensComponent,
    TokensListComponent,
    TokensDetailsComponent,
    TokensDetailsOrderbookComponent,
    TokensDetailsSellComponent,
  ],
  imports: [
    CommonModule,
    TokensRoutingModule,
    WrapperModule,
    PipeModule,
    FormsModule,
    CoinCardModule,
    WidgetModule,
    ButtonModule,
  ],
})
export class TokensModule {}
