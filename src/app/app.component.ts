import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CashContractsService } from './cash-contracts.service';
import { routeAnimations } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  title = 'slpdex';

  constructor(private cashContractsService: CashContractsService) {}

  ngAfterViewInit() {
    this.cashContractsService.init();
  }

  prepareRoute = (outlet: RouterOutlet) => {
    const animation =
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData.animation;

    return animation;
  };
}
