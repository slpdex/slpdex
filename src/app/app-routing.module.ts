import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SLPRoutes } from './slp-routes';

const routes: Routes = [
  {
    path: SLPRoutes.landing,
    component: LandingComponent,
  },
  {
    path: SLPRoutes.tokens,
    loadChildren: './tokens/tokens.module#TokensModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
