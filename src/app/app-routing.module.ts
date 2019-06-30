import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes,
  Router,
  NavigationError,
} from '@angular/router';
import { SLPRoutes } from './slp-routes';

const routes: Routes = [
  {
    path: SLPRoutes.landing,
    loadChildren: () =>
      import('./module/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: SLPRoutes.tokens,
    loadChildren: () =>
      import('./module/tokens/tokens.module').then(m => m.TokensModule),
  },
  {
    path: SLPRoutes.balance,
    loadChildren: () =>
      import('./module/balance/balance.module').then(m => m.BalanceModule),
  },
  {
    path: SLPRoutes.wallet,
    loadChildren: () =>
      import('./module/wallet/wallet.module').then(m => m.WalletModule),
  },
  {
    path: SLPRoutes.donate,
    loadChildren: () =>
      import('./module/donate/donate.module').then(m => m.DonateModule),
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
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationError) {
        window.location.reload();
      }
    });
  }
}
