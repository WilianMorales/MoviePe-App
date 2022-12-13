import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MovieDetailsResponse } from '@interfaces/movie-details.interface';
import { MoviesService } from '@services/movies.service';
import { Cast } from '@interfaces/credits.interfaces';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie?: MovieDetailsResponse;
  credits?: Cast[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.movieService.getMovieDetails(id)
      .subscribe(movies => {
        if (!movies) {
          this.router.navigateByUrl('/home')
          return;
        }
        this.movie = movies;
      });

    this.movieService.getMovieCredits(id)
      .subscribe(cast => {
        this.credits = cast;
      });

  }

  goBack(): void {
    this.location.back();
  }

}
