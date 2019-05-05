import { Component } from '@angular/core';
import { routeAnimations } from './route-animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent {
  title = 'slpdex';

  prepareRoute = (outlet: RouterOutlet) => {
    const animation =
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData.animation;
    console.log(animation);

    return animation;
  };
}
