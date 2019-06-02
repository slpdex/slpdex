import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { CashContractsService } from '../../cash-contracts.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SLPRoutes } from '../../slp-routes';
import { Wallet } from 'cashcontracts';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements OnInit, OnDestroy {
  private slpRoutes = { ...SLPRoutes };
  private destroy$ = new Subject();
  private wallet: Wallet;

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

  getStarted = () => {
    if (this.wallet) {
      this.router.navigate([this.slpRoutes.tokens]);
    } else {
      this.router.navigate([this.slpRoutes.wallet]);
    }
  };
}
