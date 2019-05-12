import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';
import { WalletDetailsComponent } from './wallet-details/wallet-details.component';
import { WalletRoutingModule } from './wallet-routing.module';
import { WalletReceiveComponent } from './wallet-receive/wallet-receive.component';
import { ModalModule } from '../../modal/modal.module';
import { WalletSendComponent } from './wallet-send/wallet-send.component';
import { WidgetModule } from '../../widget/widget.module';
import { ButtonModule } from '../../button/button.module';
import { CoinCardModule } from '../../coin-card/coin-card.module';

@NgModule({
  declarations: [
    WalletCreateComponent,
    WalletDetailsComponent,
    WalletReceiveComponent,
    WalletSendComponent,
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    SharedModule,
    FormsModule,
    ModalModule,
    WidgetModule,
    CoinCardModule,
    ButtonModule,
  ],
})
export class WalletModule {}
