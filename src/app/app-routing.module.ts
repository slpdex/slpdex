import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SLPRoutes } from './slp-routes';
import { OrderComponent } from './shared/order/order.component';

const routes: Routes = [
  {
    path: SLPRoutes.landing,
    component: LandingComponent,
    data: {
      animation: 'landing',
    },
  },
  {
    path: SLPRoutes.order,
    component: OrderComponent,
    data: {
      animation: SLPRoutes.order,
    },
  },
  {
    path: SLPRoutes.tokens,
    loadChildren: './tokens/tokens.module#TokensModule',
    data: {
      animation: SLPRoutes.tokens,
    },
  },
  {
    path: SLPRoutes.balance,
    loadChildren: './balance/balance.module#BalanceModule',
    data: {
      animation: SLPRoutes.balance,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      // enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
