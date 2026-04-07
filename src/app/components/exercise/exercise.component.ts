import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../types';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
    selector: 'app-exercise',
    standalone: true,
    imports: [CommonModule, FormsModule, TruncatePipe, SafeHtmlPipe],
    templateUrl: './exercise.component.html',
    styleUrl: './exercise.component.css',
})
export class ExerciseComponent implements OnInit {

    movies: Movie[] = [];
    filteredMovies: Movie[] = [];
    loading = true;
    selectedGenre: string | null = null;
    searchTerm = '';

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

    onSearch(): void {
        if (!this.searchTerm.trim()) {
            this.filteredMovies = this.movies;
            return;
        }
        this.filteredMovies = this.movies.filter(movie =>
            movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
    }

    // TODO: Question 2 - Methode pour extraire les genres uniques tries

    // TODO: Question 3 - Methode pour filtrer par genre

    // TODO: Question 4 - Methode pour reinitialiser les filtres
}
