import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SLPRoutes } from './shared/slp-routes';

const routes: Routes = [
  {
    path: SLPRoutes.landing,
    loadChildren: './landing/landing.module#LandingModule',
  },
  {
    path: SLPRoutes.tokens,
    loadChildren: './tokens/tokens.module#TokensModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
