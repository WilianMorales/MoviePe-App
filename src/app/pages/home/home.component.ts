import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '@interfaces/movies.interface';
import { MoviesService } from '@services/movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  movie: Movie[] = [];
  moviesSlideShow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max) {
      if(this.movieService.cargando ) { return; }
      this.movieService.getMovies()
        .subscribe(
          movies => {
            this.movie.push(...movies);
          }
        )
    }
  }


  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movie = movies;
        this.moviesSlideShow = movies;
      });
  }

  ngOnDestroy(): void {
    this.movieService.resetMoviePage();
  }

}
