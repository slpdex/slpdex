import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeAnimParams } from 'animejs';
import anime from 'animejs/lib/anime.es.js';
import { SLPRoutes } from '../../slp-routes';

@Component({
  selector: 'app-quick-order',
  templateUrl: './quick-order.component.html',
  styleUrls: ['./quick-order.component.scss'],
})
export class QuickOrderComponent implements OnInit {
  animateButton = false;

  @ViewChild('button') button: ElementRef<HTMLElement>;
  @ViewChild('dummy') dummy: ElementRef<HTMLElement>;

  constructor(private router: Router) {}

  ngOnInit() {}

  createOrder = () => {
    const element = this.button.nativeElement;
    const dummyElement = this.dummy.nativeElement;

    dummyElement.style.display = 'block';
    dummyElement.style.opacity = '1';

    anime({
      targets: dummyElement,
      top: [element.offsetTop, 0],
      left: [element.offsetLeft, 0],
      width: [element.clientWidth, window.innerWidth],
      height: [element.clientHeight, window.innerHeight],
      borderRadius: [10, 0],
      background: ['#5ebd6d', '#82cc8e'],
      easing: 'easeInQuad',
      duration: 400,
    } as AnimeAnimParams);

    setTimeout(() => {
      this.router.navigateByUrl(SLPRoutes.order);
    }, 600);
  };
}
