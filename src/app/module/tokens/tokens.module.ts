import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '../../button/button.module';
import { CoinCardModule } from '../../coin-card/coin-card.module';
import { IconModule } from '../../icon/icon.module';
import { JdenticonModule } from '../../jdenticon/jdenticon.module';
import { PipeModule } from '../../pipe/pipe.module';
import { SortModule } from '../../sort/sort.module';
import { WidgetModule } from '../../widget/widget.module';
import { WrapperModule } from '../../wrapper/wrapper.module';
import { TokensDetailsHeaderComponent } from './tokens-details/tokens-details-header/tokens-details-header.component';
import { TokensDetailsOpenOffersComponent } from './tokens-details/tokens-details-open-offers/tokens-details-open-offers.component';
import { TokensDetailsOrderbookComponent } from './tokens-details/tokens-details-orderbook/tokens-details-orderbook.component';
import { TokensDetailsSellComponent } from './tokens-details/tokens-details-sell/tokens-details-sell.component';
import { TokensDetailsComponent } from './tokens-details/tokens-details.component';
import { TokensListComponent } from './tokens-list/tokens-list.component';
import { TokensRoutingModule } from './tokens-routing.module';
import { TokensComponent } from './tokens.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    TokensComponent,
    TokensListComponent,
    TokensDetailsComponent,
    TokensDetailsOrderbookComponent,
    TokensDetailsSellComponent,
    TokensDetailsOpenOffersComponent,
    TokensDetailsHeaderComponent,
  ],
  imports: [
    CommonModule,
    TokensRoutingModule,
    WrapperModule,
    JdenticonModule,
    SortModule,
    MatProgressSpinnerModule,
    IconModule,
    PipeModule,
    FormsModule,
    CoinCardModule,
    WidgetModule,
    ButtonModule,
  ],
})
export class TokensModule {}
