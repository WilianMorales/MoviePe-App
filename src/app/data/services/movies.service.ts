
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cast, CreditsResponse } from '@interfaces/credits.interfaces';
import { MovieDetailsResponse } from '@interfaces/movie-details.interface';
import { TrailerResponse, Video } from '@interfaces/trailer-interfaces';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie, MoviesResponse } from '../interfaces/movies.interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private BASE_URL = 'https://api.themoviedb.org/3';
  private BASE_URL_YOUTUBE = 'https://www.googleapis.com/youtube/v3/search?&key=';
  private YOUTUBE_API_KEY = 'AIzaSyBUegJa0wYbC0JX7CG2_gLp_zXii5FcV-w';

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

  resetMoviePage(): void {
    this.moviePage = 1;
  }

  getMovies(): Observable<Movie[]> {

    if (this.cargando) {
      return of([]);
    }

    this.cargando = true;

    return this.http.get<MoviesResponse>(`${this.BASE_URL}/movie/now_playing`, {
      params: this.params
    }).pipe(
      map((res) => res.results),
      tap(() => {
        this.moviePage += 1;
        this.cargando = false;
      })
    );
  }

  searchMovies(texto: string): Observable<Movie[]> {

    const params = { ...this.params, page: 1, query: texto };

    return this.http.get<MoviesResponse>(`${this.BASE_URL}/search/movie`, {
      params
    }).pipe(
      map((res) => res.results.filter(movie => movie.poster_path !== null))
    );
  }

  getMovieDetails(id: string) {
    return this.http.get<MovieDetailsResponse>(`${this.BASE_URL}/movie/${id}`, {
      params: this.params
    }).pipe(
      catchError(err => of(undefined))
    );
  }

  getMovieCredits(id: string): Observable<Cast[]> {
    return this.http.get<CreditsResponse>(`${this.BASE_URL}/movie/${id}/credits`, {
      params: this.params
    }).pipe(
      map((res) => res.cast),
      catchError(err => of([]))
    );
  }

  getTrailer(title: string) {
    const trailer = title;
    /*  const parms = '&part=snippet' + '&maxResults=12&q=' + trailer; */
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('&maxResults', '12')
      .set('q', trailer)
    return this.http.get<TrailerResponse>(this.BASE_URL_YOUTUBE + this.YOUTUBE_API_KEY, { params });
  }
}
