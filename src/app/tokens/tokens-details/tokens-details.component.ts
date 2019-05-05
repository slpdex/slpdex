import { Component, OnInit, Input } from '@angular/core';
import { Token } from '../../endpoints';

@Component({
  selector: 'app-tokens-details',
  templateUrl: './tokens-details.component.html',
  styleUrls: ['./tokens-details.component.scss'],
})
export class TokensDetailsComponent implements OnInit {
  @Input() token: Token;

  constructor() {}

  ngOnInit() {
    console.log(this.token);
  }
}
