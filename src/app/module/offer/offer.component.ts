import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { getJdenticon } from '../../helpers';

export interface OfferItem {
  id: string;
  name: string;
  symbol: string;
  amount: number;
  icon: SafeHtml;
}

export interface Offer {
  from: OfferItem;
  to: OfferItem;
}

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferComponent implements OnInit {
  offer$ = new BehaviorSubject<Offer>(null);

  @ViewChild('offer', { static: false }) offer: ElementRef<HTMLElement>;

  constructor(private router: Router, private domSanitizer: DomSanitizer) {
    const extras = this.router.getCurrentNavigation().extras.state;

    if (!extras) {
      return;
    }

    const offer = extras.offer;

    console.log(extras);
    console.log(offer);

    // if (!extras || !offer) {
    //   window.history.back();
    // }
  }

  async ngOnInit() {
    console.log(this.router.getCurrentNavigation());

    this.offer$.next({
      from: {
        id: 'asdasd',
        name: 'ASD',
        symbol: 'TTTT',
        amount: 123,
        icon: this.domSanitizer.bypassSecurityTrustHtml(getJdenticon('asdasd')),
      },
      to: {
        id: 'asdasd',
        name: 'ASD',
        symbol: 'TTTT',
        amount: 123,
        icon: this.domSanitizer.bypassSecurityTrustHtml(
          getJdenticon('asd3232323asd'),
        ),
      },
    });

    // anime({
    //   targets: this.offer.nativeElement,
    //   marginTop: [400, 0],
    //   opacity: 1,
    //   duration: 1000,
    //   easing: 'easeOutQuad',
    // } as AnimeAnimParams);
  }
}
