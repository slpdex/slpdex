import { Component, OnInit } from '@angular/core';
import { SLPRoutes } from '../shared/slp-routes';

@Component({
  selector: 'app-header',  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  routes = { ...SLPRoutes };

  constructor() {}

  ngOnInit() {}
}
