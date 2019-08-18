import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TxHistory } from 'slpdexdb-api/types';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private txHistorySubject$ = new BehaviorSubject<TxHistory>(null);

  get txHistory$() {
    return this.txHistorySubject$.asObservable();
  }

  setTxHistory = (item: TxHistory) => {
    this.txHistorySubject$.next(item);
  };
}
