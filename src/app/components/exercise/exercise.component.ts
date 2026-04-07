import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../types';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
    selector: 'app-exercise',
    standalone: true,
    imports: [CommonModule, TruncatePipe],
    templateUrl: './exercise.component.html',
    styleUrl: './exercise.component.css',
})
export class ExerciseComponent implements OnInit {

    movies: Movie[] = [];
    filteredMovies: Movie[] = [];
    loading = true;
    selectedGenre: string | null = null;

    constructor(private movieService: MovieService) {}

    ngOnInit(): void {
        this.movieService.getMoviesWithGenres().subscribe({
            next: (movies) => {
                this.movies = movies;
                this.filteredMovies = movies;
                this.loading = false;
                console.log('Films recuperes:', movies);
            },
            error: (err) => {
                console.error('Erreur:', err);
                this.loading = false;
            }
        });
    }

    // TODO: Question 2 - Methode pour extraire les genres uniques tries

    // TODO: Question 3 - Methode pour filtrer par genre

    // TODO: Question 4 - Methode pour reinitialiser les filtres
}
