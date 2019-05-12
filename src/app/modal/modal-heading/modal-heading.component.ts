import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-modal-heading',
  templateUrl: './modal-heading.component.html',
  styleUrls: ['./modal-heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalHeadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
