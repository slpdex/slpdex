import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SLPRoutes } from './slp-routes';

const routes: Routes = [
  {
    path: SLPRoutes.landing,
    loadChildren: () => import('./module/landing/landing.module').then(m => m.LandingModule),
    data: {
      animation: 'landing',
    },
  },
  {
    path: SLPRoutes.offer,
    loadChildren: () => import('./module/offer/offer.module').then(m => m.OfferModule),
    data: {
      animation: SLPRoutes.offer,
    },
  },
  {
    path: SLPRoutes.tokens,
    loadChildren: () => import('./module/tokens/tokens.module').then(m => m.TokensModule),
    data: {
      animation: SLPRoutes.tokens,
    },
  },
  {
    path: SLPRoutes.balance,
    loadChildren: () => import('./module/balance/balance.module').then(m => m.BalanceModule),
    data: {
      animation: SLPRoutes.balance,
    },
  },

  {
    path: SLPRoutes.wallet,
    loadChildren: () => import('./module/wallet/wallet.module').then(m => m.WalletModule),
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
