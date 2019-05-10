import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-recent',
  templateUrl: './landing-recent.component.html',
  styleUrls: ['./landing-recent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingRecentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
