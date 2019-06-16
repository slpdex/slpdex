import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'cashcontracts';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CashContractsService } from '../../cash-contracts.service';
import { SLPRoutes } from '../../slp-routes';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements OnInit, OnDestroy, AfterViewInit {
  private slpRoutes = { ...SLPRoutes };
  private destroy$ = new Subject();
  private wallet: Wallet;

  @ViewChild('bg', { static: false }) bg: ElementRef<HTMLElement>;

  constructor(
    private cashContractsService: CashContractsService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.cashContractsService.listenWallet
      .pipe(takeUntil(this.destroy$))
      .subscribe(wallet => {
        this.wallet = wallet;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  // TODO: Remove this when release
  ngAfterViewInit() {
    const infoHeight = document.querySelector('.info').clientHeight;
    this.bg.nativeElement.style.top = infoHeight + 'px';
  }

  getStarted = () => {
    if (this.wallet) {
      this.router.navigate([this.slpRoutes.tokens]);
    } else {
      this.router.navigate([this.slpRoutes.wallet]);
    }
  };
}
