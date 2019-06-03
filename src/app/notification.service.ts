import { Injectable } from '@angular/core';
import { Options } from 'noty';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private defaultOptions: Options = {
    timeout: 10000,
    theme: 'metroui',
    layout: 'bottomRight',
  };

  constructor() {}

  showNotification = async (text: string) => {
    const module = await import('noty');
    const noty: typeof Noty = (module as any).default;

    new noty({
      ...this.defaultOptions,
      text,
    }).show();
  };
}
