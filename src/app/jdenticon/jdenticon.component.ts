import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { getJdenticon } from '../helpers';

@Component({
  selector: 'app-jdenticon',
  templateUrl: './jdenticon.component.html',
  styleUrls: ['./jdenticon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JdenticonComponent implements OnInit {
  @Input() id: string;
  @Input() size: number;

  svgBase64: SafeHtml;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    this.svgBase64 = this.domSanitizer.bypassSecurityTrustHtml(
      getJdenticon(this.id, this.size ? this.size : undefined),
    );
  }
}
