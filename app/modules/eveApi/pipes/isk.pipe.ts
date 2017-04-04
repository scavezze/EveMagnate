import { Pipe, PipeTransform } from '@angular/core';
import * as cf from 'currency-formatter';

@Pipe({name: 'isk'})
export class IskPipe implements PipeTransform {
  transform(value: number): number {
    if(value) {
      let stringValue = value.toString();
      let amount = stringValue.slice(0, -2) + "." + stringValue.slice(-2);
      return cf.format(amount, {
          symbol: 'ISK',
          decimal: '.',
          thousand: ',',
          precision: 2,
          format: '%v %s' // %s is the symbol and %v is the value
      });
    } else {
      return value;
    }
  }
}