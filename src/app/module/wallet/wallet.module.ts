import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '../../button/button.module';
import { CoinCardModule } from '../../coin-card/coin-card.module';
import { CopyModule } from '../../directive/copy/copy.module';
import { IconModule } from '../../icon/icon.module';
import { ModalModule } from '../../modal/modal.module';
import { PipeModule } from '../../pipe/pipe.module';
import { WidgetModule } from '../../widget/widget.module';
import { WrapperModule } from '../../wrapper/wrapper.module';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';
import { WalletExportComponent } from './wallet-export/wallet-export.component';
import { WalletReceiveComponent } from './wallet-receive/wallet-receive.component';
import { WalletRoutingModule } from './wallet-routing.module';
import { WalletSendComponent } from './wallet-send/wallet-send.component';
import { WalletComponent } from './wallet.component';

@NgModule({
  declarations: [
    WalletCreateComponent,
    WalletReceiveComponent,
    WalletSendComponent,
    WalletExportComponent,
    WalletComponent,
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    WrapperModule,
    IconModule,
    PipeModule,
    CopyModule,
    FormsModule,
    ModalModule,
    WidgetModule,
    CoinCardModule,
    ButtonModule,
  ],
})
export class WalletModule {}
