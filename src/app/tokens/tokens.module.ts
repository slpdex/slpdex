import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TokensListComponent } from './tokens-list/tokens-list.component';
import { TokensRoutingModule } from './tokens-routing.module';
import { TokensComponent } from './tokens.component';

@NgModule({
  declarations: [TokensComponent, TokensListComponent],
  imports: [CommonModule, TokensRoutingModule, SharedModule],
})
export class TokensModule {}
