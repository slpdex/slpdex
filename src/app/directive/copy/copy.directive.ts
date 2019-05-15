import { Directive, HostListener, Input } from '@angular/core';
import { NotificationService } from '../../notification.service';

@Directive({
  selector: '[appCopy]',
})
export class CopyDirective {
  @Input() copyInputElement: HTMLInputElement;

  @Input() copyNotificationText: string;

  @HostListener('click', ['$event']) onClick($event) {
    this.copyInputElement.disabled = false;
    this.copyInputElement.select();
    this.copyInputElement.disabled = true;
    document.execCommand('copy');

    if (this.copyNotificationText) {
      this.notificationService.showNotification(this.copyNotificationText);
    }
  }

  constructor(private notificationService: NotificationService) {}
}
