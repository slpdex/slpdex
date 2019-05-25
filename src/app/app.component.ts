import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { CashContractsService } from './cash-contracts.service';
import { UpdateService } from './update.service';

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
    private updateService: UpdateService,
  ) {}

  ngAfterViewInit() {
    this.cashContractsService.init();
  }
}
