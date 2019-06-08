import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { CashContractsService } from './cash-contracts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  title = 'slpdex';

  constructor(
    private cashContractsService: CashContractsService,
  ) // private swUpdate: SwUpdate,
  {}

  ngAfterViewInit() {
    this.cashContractsService.init();
    // if (this.swUpdate.activated) {
    //   this.swUpdate.available.subscribe(async () => {
    //     await this.swUpdate.activateUpdate();
    //     window.location.reload();
    //   });
    // }
  }
}
