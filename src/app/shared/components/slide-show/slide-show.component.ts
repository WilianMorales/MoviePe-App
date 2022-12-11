import { AfterViewInit, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '@interfaces/movies.interface';

import SwiperCore from 'swiper';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements AfterViewInit {

  @Input() movies?: Movie[];
  mySwiper?: SwiperCore;
  movie: Movie[] = [];
  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    this.mySwiper = new SwiperCore('.swiper', {
      loop: true,
    })
  }

  onSliderPrev(): void {
    this.mySwiper?.slidePrev();
  }

  onSliderNext(): void {
    this.mySwiper?.slideNext();
  }

  onMovieClick(movie: Movie) {
    this.router.navigate(['/movie/',movie.id]);
  }

}
