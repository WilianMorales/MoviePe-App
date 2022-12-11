import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readmore'
})
export class ReadmorePipe implements PipeTransform {

  transform(value: string): string {
    if (value.toString().length > 140) {
      value = value.substring(0, 140)
    }
    value = value + '...'
    return value;
  }

}
