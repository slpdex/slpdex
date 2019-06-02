import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
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
    private swUpdate: SwUpdate,
    private router: Router,
  ) {}

  ngAfterViewInit() {
    this.cashContractsService.init();

    if (this.swUpdate.activated) {
      this.swUpdate.available.subscribe(async () => {
        await this.swUpdate.activateUpdate();
        window.location.reload();
      });
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'UA-141268227-1', {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
}
