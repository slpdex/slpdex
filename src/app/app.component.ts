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

  constructor(private cashContractsService: CashContractsService) {}

  ngAfterViewInit() {
    this.cashContractsService.init();
  }
}
