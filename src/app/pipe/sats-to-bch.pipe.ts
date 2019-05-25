import { Pipe, PipeTransform } from '@angular/core';
import { convertSatsToBch } from '../helpers';

@Pipe({
  name: 'satsToBch',
})
export class SatsToBchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return convertSatsToBch(value);
  }
}
