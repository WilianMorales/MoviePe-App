import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noposterimage'
})
export class NoposterimagePipe implements PipeTransform {

  transform(imagen: string): string {

    if (imagen) {
      return `https://image.tmdb.org/t/p/original${imagen}`
    }
    else {
      return './assets/imgs/no-image.jpg'
    }
  }

}