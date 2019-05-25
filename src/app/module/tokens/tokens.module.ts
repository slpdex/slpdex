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

@NgModule({
  declarations: [
    TokensComponent,
    TokensListComponent,
    TokensDetailsComponent,
    TokensDetailsOrderbookComponent,
  ],
  imports: [
    CommonModule,
    TokensRoutingModule,
    WrapperModule,
    FormsModule,
    CoinCardModule,
    WidgetModule,
    ButtonModule,
  ],
})
export class TokensModule {}
