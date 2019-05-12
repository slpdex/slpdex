import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '../../button/button.module';
import { CoinCardModule } from '../../coin-card/coin-card.module';
import { ModalModule } from '../../modal/modal.module';
import { PipeModule } from '../../pipe/pipe.module';
import { WidgetModule } from '../../widget/widget.module';
import { WrapperModule } from '../../wrapper/wrapper.module';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';
import { WalletDetailsComponent } from './wallet-details/wallet-details.component';
import { WalletReceiveComponent } from './wallet-receive/wallet-receive.component';
import { WalletRoutingModule } from './wallet-routing.module';
import { WalletSendComponent } from './wallet-send/wallet-send.component';

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
    WrapperModule,
    PipeModule,
    FormsModule,
    ModalModule,
    WidgetModule,
    CoinCardModule,
    ButtonModule,
  ],
})
export class WalletModule {}