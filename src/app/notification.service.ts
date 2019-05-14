import { Injectable } from '@angular/core';
import * as Noty from 'noty';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private defaultOptions: Noty.Options = {
    timeout: 10000,
    theme: 'metroui',
    layout: 'bottomRight',
  };

  constructor() {}

  showNotification = (text: string) => {
    new Noty({
      ...this.defaultOptions,
      text,
    }).show();
  };
}
