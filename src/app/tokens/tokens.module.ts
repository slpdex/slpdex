import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TokensRoutingModule } from './tokens-routing.module';
import { TokensComponent } from './tokens.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TokensComponent],
  imports: [CommonModule, TokensRoutingModule, SharedModule],
})
export class TokensModule {}
