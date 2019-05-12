import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { routeAnimations } from './route-animations';
import { RouterOutlet } from '@angular/router';
import { CashContractsService } from './cash-contracts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'slpdex';

  constructor(private cashContractsService: CashContractsService) {}

  ngOnInit() {
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
