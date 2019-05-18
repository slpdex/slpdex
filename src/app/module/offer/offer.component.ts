import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { AnimeAnimParams } from 'animejs';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferComponent implements OnInit {
  @ViewChild('offer') offer: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit() {
    anime({
      targets: this.offer.nativeElement,
      marginTop: [400, 0],
      opacity: 1,
      duration: 1000,
      easing: 'easeOutQuad',
    } as AnimeAnimParams);
  }
}
