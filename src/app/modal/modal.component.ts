import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {
  @HostListener('document:keyup', ['$event']) keyup(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.goBack();
    }
  }

  constructor() {}

  ngOnInit() {}

  goBack = () => {
    window.history.back();
  };
}
