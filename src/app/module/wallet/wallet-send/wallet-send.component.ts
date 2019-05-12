import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wallet-send',
  templateUrl: './wallet-send.component.html',
  styleUrls: ['./wallet-send.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletSendComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  send = () => {};
}
