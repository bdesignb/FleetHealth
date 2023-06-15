import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandsSeparator'
})
export class ThousandsSeparatorPipe implements PipeTransform {

  transform(value: number): string {
    const formattedNumber = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return formattedNumber;
  }

}
