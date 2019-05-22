import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokensComponent } from './tokens.component';
import { TokensDetailsComponent } from './tokens-details/tokens-details.component';

const routes: Routes = [
  {
    path: '',
    component: TokensComponent,
  },
  {
    path: ':symbol',
    component: TokensDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TokensRoutingModule {}
