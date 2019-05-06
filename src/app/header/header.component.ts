import { Component, OnInit } from '@angular/core';
import { SLPRoutes } from '../slp-routes';
import * as moment from 'moment';
import { EndpointsService } from '../endpoints.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  routes = { ...SLPRoutes };
  timeSinceLastBlock: string;

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

        this.timeSinceLastBlock = moment.unix(timestamp).fromNow(true);
      });
  };
}
