export enum ProgramType {
    Series = 'series',
    Movies = 'movie',
}

export interface PosterArt {
    url: string;
    width: number;
    height: number;
}

export interface MovieImage {
    "Poster Art": PosterArt;
}

export interface Movie {
    title: string;
    description: string;
    programType: ProgramType;
    releaseYear: number;
    images: MovieImage;
}

export interface MoviesResponse {
    total: number;
    entries: Movie[];
}