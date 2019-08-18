import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TxHistory, AddressUtxo } from 'slpdexdb-api/types';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private txHistorySubject$ = new BehaviorSubject<TxHistory>(null);
  private addressUtxoSubject$ = new BehaviorSubject<AddressUtxo>(null);

  get txHistory$() {
    return this.txHistorySubject$.asObservable();
  }

  get addressUtxo$() {
    return this.addressUtxoSubject$.asObservable();
  }

  setTxHistory = (item: TxHistory) => {
    this.txHistorySubject$.next(item);
  };

  setAddressUtxo = (item: AddressUtxo) => {
    this.addressUtxoSubject$.next(item);
  };
}
