import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '@interfaces/movies.interface';

@Component({
  selector: 'app-movie-card-grid',
  templateUrl: './movie-card-grid.component.html',
  styleUrls: ['./movie-card-grid.component.scss']
})
export class MovieCardGridComponent implements OnInit {

  @Input() movies?: Movie[];

  constructor() { }

  ngOnInit(): void {
  }

}
