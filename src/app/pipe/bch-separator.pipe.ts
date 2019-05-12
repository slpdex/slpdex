import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bchSeparator',
})
export class BchSeparatorPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    const values = value.split('.');

    return `${values[0]}.${values[1].slice(0, 3)} ${values[1].slice(
      3,
      6,
    )} ${values[1].slice(6, 8)}`;
  }
}
