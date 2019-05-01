import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';

const components = [WrapperComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule],
})
export class SharedModule {}
