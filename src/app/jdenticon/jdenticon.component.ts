import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { getJdenticon } from '../helpers';

@Component({
  selector: 'app-jdenticon',
  templateUrl: './jdenticon.component.html',
  styleUrls: ['./jdenticon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JdenticonComponent implements OnInit, OnChanges {
  @Input() id: string;
  @Input() size: number;

  svgBase64: SafeHtml;

  constructor(
    private domSanitizer: DomSanitizer,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {}

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.id) {
      this.svgBase64 = this.domSanitizer.bypassSecurityTrustHtml(
        await getJdenticon(this.id, this.size ? this.size : undefined),
      );
      this.changeDetectorRef.markForCheck();
    }
  }
}
