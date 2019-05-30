import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SLPRoutes } from '../../../slp-routes';

@Component({
  selector: 'app-landing-donate',
  templateUrl: './landing-donate.component.html',
  styleUrls: ['./landing-donate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingDonateComponent implements OnInit {
  slpRoutes = { ...SLPRoutes };

  constructor() {}

  ngOnInit() {}
}
