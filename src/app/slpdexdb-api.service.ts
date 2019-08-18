import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SlpdexDBApiService {
  private socket: WebSocket;
  private isOpenSubject$ = new BehaviorSubject<boolean>(false);

  constructor(private storageService: StorageService) {}

  get isOpen$() {
    return this.isOpenSubject$.asObservable();
  }

  init = (publicAddress: string) => {
    console.log(publicAddress);

    // if (!publicAddress) {
    //   return;
    // }

    this.socket = new WebSocket(
      'wss://api.slpdex.cash/ws/bitcoincash:qzzp3al8kmq6a26wqre4xs494897q27pvy0jtqhqny',
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
      console.log('Socket Close');
      this.isOpenSubject$.next(false);
    });

    this.socket.addEventListener('error', event => {
      console.log('Socket Error');
      this.isOpenSubject$.next(false);
    });
  };
}
