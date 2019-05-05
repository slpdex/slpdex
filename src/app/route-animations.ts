import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { SLPRoutes } from './slp-routes';

export function fade() {
  return [
    query(
      ':enter',
      [style({ opacity: 0 }), animate('.4s ease', style({ opacity: 1 }))],
      { optional: true },
    ),
  ];
}

export const routeAnimations = trigger('routeAnimations', [
  transition('* => landing', fade()),
  transition(`* => ${SLPRoutes.tokens}`, fade()),
  transition(`* => ${SLPRoutes.balance}`, fade()),
]);
