import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SLPRoutes } from '../../slp-routes';

@Component({
  selector: 'app-quick-order',
  templateUrl: './quick-order.component.html',
  styleUrls: ['./quick-order.component.scss'],
})
export class QuickOrderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  createOrder = () => {
    console.log('hello');
    this.router.navigateByUrl('/' + SLPRoutes.order);
  };
}
