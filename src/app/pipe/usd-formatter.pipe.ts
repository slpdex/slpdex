import { Pipe, PipeTransform } from '@angular/core';
import BigNumber from 'bignumber.js';

@Pipe({
  name: 'usdFormatter',
})
export class UsdFormatterPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    return new BigNumber(value).toFixed(2);
  }
}
