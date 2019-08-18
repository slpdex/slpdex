import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { CashContractsService } from './cash-contracts.service';
import { SLPRoutes } from './slp-routes';
import { SlpdexDBApiService } from './slpdexdb-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  title = 'slpdex';
  slpRoutes = { ...SLPRoutes };

  constructor(
    private cashContractsService: CashContractsService, // private swUpdate: SwUpdate,
    private slpdexDBApiService: SlpdexDBApiService,
  ) {}

  ngAfterViewInit() {
    this.cashContractsService.publicAddress$.subscribe(publicAddress =>
      this.slpdexDBApiService.init(publicAddress),
    );

    this.cashContractsService.init();

    // if (this.swUpdate.activated) {
    //   this.swUpdate.available.subscribe(async () => {
    //     await this.swUpdate.activateUpdate();
    //     window.location.reload();
    //   });
    // }
  }
}
