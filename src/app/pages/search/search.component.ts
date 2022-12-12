import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@interfaces/movies.interface';
import { MoviesService } from '@services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  texto: string = '';
  movies: Movie[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        this.texto = params.texto;

        // TODO: llamar el servicio
        this.moviesService.searchMovies(params.texto)
          .subscribe( movies => {
            this.movies = movies
          })
      })
  }

}
