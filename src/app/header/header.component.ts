import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { EndpointsService } from '../endpoints.service';
import { SLPRoutes } from '../slp-routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  routes = { ...SLPRoutes };
  timeSinceLastBlock$ = new Subject<string>();

  constructor(private endpointsService: EndpointsService) {}

  ngOnInit() {
    this.getTimeSinceLastBlock();
    setInterval(() => this.getTimeSinceLastBlock(), 10000);
  }

  getTimeSinceLastBlock = () => {
    this.endpointsService
      .getTimeSinceLastBlock()
      .pipe(take(1))
      .subscribe(data => {
        const timestamp = data.c.last_block_time;

        this.timeSinceLastBlock$.next(moment.unix(timestamp).fromNow(true));
      });
  };
}
