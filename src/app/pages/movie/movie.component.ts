import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MovieDetailsResponse } from '@interfaces/movie-details.interface';
import { MoviesService } from '@services/movies.service';
import { Cast } from '@interfaces/credits.interfaces';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie?: MovieDetailsResponse;
  credits: Cast[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    combineLatest([
      this.movieService.getMovieDetails(id),
      this.movieService.getMovieCredits(id)
    ]).subscribe(([movies, cast]) => {

      if (!movies) {
        this.router.navigateByUrl('/home')
        return;
      }

      this.movie = movies;
      this.credits = cast.filter(actor => actor.profile_path !== null);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
