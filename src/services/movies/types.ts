export enum ProgramType {
    Series = 'series',
    Movies = 'movies',
}

export interface Movie {
    title: string;
    description: string;
    programType: ProgramType;
    releaseYear: number;
}

export interface MoviesResponse {
    total: number;
    entries: Movie[];
}