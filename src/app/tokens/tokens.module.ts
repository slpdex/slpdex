import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TokensListComponent } from './tokens-list/tokens-list.component';
import { TokensRoutingModule } from './tokens-routing.module';
import { TokensComponent } from './tokens.component';
import { TokensDetailsComponent } from './tokens-details/tokens-details.component';

@NgModule({
  declarations: [TokensComponent, TokensListComponent, TokensDetailsComponent],
  imports: [CommonModule, TokensRoutingModule, SharedModule],
})
export class TokensModule {}
