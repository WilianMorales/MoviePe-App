import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(imagen: string): string {

    if (imagen) {
      return `https://image.tmdb.org/t/p/w500${imagen}`
    } else {
      return './assets/imgs/no-image.jpg'
    }
  }

}
