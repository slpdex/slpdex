import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SLPRoutes } from './slp-routes';

const routes: Routes = [
  {
    path: SLPRoutes.landing,
    loadChildren: './module/landing/landing.module#LandingModule',
    data: {
      animation: 'landing',
    },
  },
  {
    path: SLPRoutes.offer,
    loadChildren: './module/offer/offer.module#OfferModule',
    data: {
      animation: SLPRoutes.offer,
    },
  },
  {
    path: SLPRoutes.tokens,
    loadChildren: './module/tokens/tokens.module#TokensModule',
    data: {
      animation: SLPRoutes.tokens,
    },
  },
  {
    path: SLPRoutes.balance,
    loadChildren: './module/balance/balance.module#BalanceModule',
    data: {
      animation: SLPRoutes.balance,
    },
  },

  {
    path: SLPRoutes.wallet,
    loadChildren: './module/wallet/wallet.module#WalletModule',
    data: {
      animation: SLPRoutes.wallet,
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
