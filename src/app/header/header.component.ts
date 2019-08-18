import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { EndpointsService } from '../endpoints.service';
import { SLPRoutes } from '../slp-routes';
import { SlpdexDBApiService } from '../slpdexdb-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, AfterViewInit {
  hasLoaded = false;
  routes = { ...SLPRoutes };
  timeSinceLastBlock$ = new Subject<string>();

  constructor(
    private endpointsService: EndpointsService,
    private changeDetectorRef: ChangeDetectorRef,
    public slpdexDBApiService: SlpdexDBApiService,
  ) {}

  ngOnInit() {
    window.onload = e => {
      setTimeout(() => {
        this.hasLoaded = true;
        this.changeDetectorRef.markForCheck();
      }, 1000);
    };
  }

  ngAfterViewInit() {
    this.getTimeSinceLastBlock();
    setInterval(() => this.getTimeSinceLastBlock(), 20000);
  }

  private getTimeSinceLastBlock = () => {
    this.endpointsService
      .getTimeSinceLastBlock()
      .pipe(take(1))
      .subscribe(async data => {
        const timestamp = data.c.last_block_time;
        const moment = await import('moment');

        this.timeSinceLastBlock$.next(moment.unix(timestamp).fromNow(true));
      });
  };
}
