
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie, MoviesResponse } from '../interfaces/movies.interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private moviePage = 1;
  cargando: boolean = false;

  constructor(private http: HttpClient) { }

  get params() {
    return {
      api_key: 'e5d85777c32a5cf0cb376fc57517e987',
      language: 'es-ES',
      page: this.moviePage.toString()
    }
  }

  getMovies(): Observable<Movie[]> {

    if (this.cargando) {
      return of([]);
    }

    this.cargando = true;

    return this.http.get<MoviesResponse>(`${this.baseUrl}/movie/now_playing`, {
      params: this.params
    }).pipe(
      map((res) => res.results),
      tap(() => {
        this.moviePage += 1;
        this.cargando = false;
      })
    );
  }
}
