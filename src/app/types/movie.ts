import { Genre } from './genre';

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    genres: Genre[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    popularity: number;
    release_date: string;
    status: string;
    title: string;
    video: boolean;
    vote_count: number;
    vote_average: string;
}
