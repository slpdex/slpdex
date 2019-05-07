import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
