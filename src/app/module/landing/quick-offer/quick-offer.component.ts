import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { MarketService } from '../../../market.service';
import { TokenOverview } from 'slpdex-market';
import { SLPRoutes } from '../../../slp-routes';
import { EndpointsService } from '../../../endpoints.service';

@Component({
  selector: 'app-quick-offer',
  templateUrl: './quick-offer.component.html',
  styleUrls: ['./quick-offer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickOfferComponent implements OnInit, OnDestroy, AfterViewInit {
  selectedTokenLeft: TokenOverview = {} as TokenOverview;
  selectedTokenRight: TokenOverview = {} as TokenOverview;

  tokenCount = 0;

  slpRoutes = { ...SLPRoutes };

  private destroy$ = new Subject();
  private tokenOverview: TokenOverview[];
  private animationStarted = false;

  private selectedTokenIndex = 0;

  private animateLeftClass = 'quick-offer__animate--left';
  private animateRightClass = 'quick-offer__animate--right';
  private hideClass = 'quick-offer__hide';

  private slideShowInterval: number;

  @ViewChild('tokenBoxLeft', { static: false }) tokenBoxLeft: ElementRef<
    HTMLElement
  >;

  @ViewChild('tokenBoxRight', { static: false }) tokenBoxRight: ElementRef<
    HTMLElement
  >;

  @ViewChild('bchBox', { static: false }) bchBox: ElementRef<HTMLElement>;

  constructor(
    private marketService: MarketService,
    private changeDetectorRef: ChangeDetectorRef,
    private endpointsService: EndpointsService,
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.stopSlideShow();
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  ngAfterViewInit() {
    this.endpointsService
      .getTokenCount()
      .pipe(take(1))
      .subscribe(tokenCount => {
        this.tokenCount = tokenCount.t[0].count;
        this.changeDetectorRef.markForCheck();
      });

    this.marketService.loadMarketOverview('marketCapSatoshis', false);
    setTimeout(() => this.listenMarketOverview(), 1000);
  }

  stopSlideShow = () => {
    window.clearInterval(this.slideShowInterval);
  };

  private listenMarketOverview = () => {
    this.marketService.marketOverview
      .pipe(takeUntil(this.destroy$))
      .subscribe(overview => {
        if (!overview.length) {
          return;
        }

        this.tokenOverview = overview;

        if (!this.animationStarted) {
          this.animationStarted = true;
          this.selectedTokenLeft = overview[this.selectedTokenIndex];
          this.changeDetectorRef.markForCheck();

          this.startSlideShow();
          this.firstAnimation();
        }
      });
  };

  startSlideShow = () => {
    this.stopSlideShow();

    this.slideShowInterval = window.setInterval(() => {
      this.setTokens();
      window.setTimeout(() => this.slideBch(), 1000);
    }, 4000);
  };

  private firstAnimation = () => {
    this.bchBox.nativeElement.classList.add(this.animateRightClass);
    this.tokenBoxLeft.nativeElement.classList.add(this.animateLeftClass);

    setTimeout(
      () => this.tokenBoxRight.nativeElement.classList.remove(this.hideClass),
      1000,
    );
  };

  private slideBch = () => {
    const element = this.bchBox.nativeElement;

    if (element.classList.contains(this.animateLeftClass)) {
      element.classList.remove(this.animateLeftClass);
      element.classList.add(this.animateRightClass);
    } else {
      element.classList.remove(this.animateRightClass);
      element.classList.add(this.animateLeftClass);
    }
  };

  private setTokens = () => {
    this.selectedTokenIndex++;

    if (this.selectedTokenIndex >= this.tokenOverview.length) {
      this.selectedTokenIndex = 0;
    }

    if (this.selectedTokenIndex % 2 === 0) {
      this.selectedTokenLeft = this.tokenOverview[this.selectedTokenIndex];
    } else {
      this.selectedTokenRight = this.tokenOverview[this.selectedTokenIndex];
    }

    this.changeDetectorRef.markForCheck();
  };
}
