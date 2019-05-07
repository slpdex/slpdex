import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-team',
  templateUrl: './landing-team.component.html',
  styleUrls: ['./landing-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingTeamComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
