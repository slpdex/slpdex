import { Pipe, PipeTransform } from '@angular/core';
import { convertSatsToBch } from '../helpers';
import BigNumber from 'bignumber.js';

@Pipe({
  name: 'satsToBch',
})
export class SatsToBchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return convertSatsToBch(new BigNumber(value));
  }
}
