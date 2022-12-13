import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '@interfaces/movies.interface';

@Component({
  selector: 'app-movie-card-grid',
  templateUrl: './movie-card-grid.component.html',
  styleUrls: ['./movie-card-grid.component.scss']
})
export class MovieCardGridComponent implements OnInit {

  @Input() movies?: Movie[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onMovieClick(movie: Movie): void {
    this.router.navigate(['/movie/' + movie.id]);
  }

}
