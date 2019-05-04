import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';
import { OrderComponent } from './order/order.component';
import { RouterModule } from '@angular/router';

const components = [WrapperComponent, OrderComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
