import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { TokensDetails } from '../tokens-details.component';

@Component({
  selector: 'app-tokens-details-header',
  templateUrl: './tokens-details-header.component.html',
  styleUrls: ['./tokens-details-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokensDetailsHeaderComponent implements OnInit {
  @Input() token$: TokensDetails;

  constructor() {}

  ngOnInit() {}
}
