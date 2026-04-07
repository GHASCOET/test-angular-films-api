import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { Movie } from '@types';

@Injectable({
    providedIn: 'root',
})
export class MovieService {
    private http = inject(HttpClient);
    private endpoint = 'https://api.themoviedb.org/3/movie/';
    private apiKey = '5108c7f45f91682327615d3947771777';

    getUpcomingMovies(): Observable<Movie[]> {
        return this.http
            .get<{ results: Movie[] }>(
                `${this.endpoint}upcoming?api_key=${this.apiKey}&language=fr-FR`
            )
            .pipe(map((response) => response.results));
    }

    getMovieDetails(id: number): Observable<Movie> {
        return this.http.get<Movie>(
            `${this.endpoint}${id}?api_key=${this.apiKey}&language=fr-FR`
        );
    }

    getMoviesWithGenres(): Observable<Movie[]> {
        return this.getUpcomingMovies().pipe(
            switchMap((movies) =>
                forkJoin(
                    movies.map((movie) => this.getMovieDetails(movie.id))
                )
            )
        );
    }
}
