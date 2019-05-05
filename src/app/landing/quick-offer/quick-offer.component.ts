import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeAnimParams } from 'animejs';
import anime from 'animejs/lib/anime.es.js';
import { SLPRoutes } from '../../slp-routes';

@Component({
  selector: 'app-quick-offer',
  templateUrl: './quick-offer.component.html',
  styleUrls: ['./quick-offer.component.scss'],
})
export class QuickOfferComponent implements OnInit {
  animateButton = false;

  @ViewChild('button') button: ElementRef<HTMLElement>;
  @ViewChild('dummy') dummy: ElementRef<HTMLElement>;

  constructor(private router: Router) {}

  ngOnInit() {}

  createoffer = () => {
    const element = this.button.nativeElement;
    const dummyElement = this.dummy.nativeElement;

    dummyElement.style.display = 'block';
    dummyElement.style.opacity = '1';

    anime({
      targets: dummyElement,
      top: [element.offsetTop - window.scrollY, 0],
      left: [element.offsetLeft, 0],
      width: [element.clientWidth, window.innerWidth],
      height: [element.clientHeight, window.innerHeight],
      bofferRadius: [10, 0],
      background: ['#5ebd6d', '#82cc8e'],
      easing: 'easeInQuad',
      duration: 400,
    } as AnimeAnimParams);

    setTimeout(() => {
      this.router.navigateByUrl(SLPRoutes.offer);
    }, 600);
  };
}
