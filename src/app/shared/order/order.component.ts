import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { AnimeAnimParams } from 'animejs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @ViewChild('order') order: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit() {
    anime({
      targets: this.order.nativeElement,
      marginTop: [400, 0],
      opacity: 1,
      duration: 1000,
      easing: 'easeOutQuad',
    } as AnimeAnimParams);
  }
}
