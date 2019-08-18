import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class SlpdexDBApiService {
  private socket: WebSocket;
  private isOpenSubject$ = new BehaviorSubject<boolean>(false);
  private publicAddress =
    'bitcoincash:qzzp3al8kmq6a26wqre4xs494897q27pvy0jtqhqny';

  private reconnectTimer: number;

  constructor(private storageService: StorageService) {}

  get isOpen$() {
    return this.isOpenSubject$.asObservable();
  }

  init = (publicAddress: string) => {
    console.log(publicAddress);

    // if (!publicAddress) {
    //   return;
    // }

    // this.publicAddress = publicAddress;

    this.connect();
  };

  private connect = () => {
    this.socket = new WebSocket(
      `wss://api.slpdex.cash/ws/${this.publicAddress}`,
    );

    this.socket.addEventListener('open', event => {
      console.log('Socket Open');
      this.isOpenSubject$.next(true);
    });

    this.socket.addEventListener('message', event => {
      console.log('Socket Message', event);
      if (!event || !event.data) {
        return;
      }

      const data = JSON.parse(event.data);

      if (data.type === 'TxHistory') {
        this.storageService.setTxHistory(data);
      }
    });

    this.socket.addEventListener('close', event => {
      console.log('Socket Close', event);
      this.reconnect();
    });

    this.socket.addEventListener('error', event => {
      console.log('Socket Error', event);
      this.reconnect();
    });
  };

  private reconnect = () => {
    this.socket = null;
    this.isOpenSubject$.next(false);

    window.clearTimeout(this.reconnectTimer);

    this.reconnectTimer = window.setTimeout(() => {
      this.isOpenSubject$.pipe(take(1)).subscribe(isOpen => {
        if (!isOpen) {
          this.connect();
        }
      });
    }, 10000);
  };
}
