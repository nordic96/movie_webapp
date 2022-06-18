import { MoviesResponse, YearFact } from "./types";

const NUM_URL = 'http://numbersapi.com';
const RELEASE_YEAR_URL = (year: number) => `${NUM_URL}/${year}/year?json`;

const fetchMovies = (): Promise<MoviesResponse> => {
    return fetch('./sample.json').then((res) => res.json());
};

const fetchInterestingFacts = (year: number): Promise<YearFact> => {
    return fetch(RELEASE_YEAR_URL(year))
        .then((res) => res.json())
        .catch((err) => console.error(err));
};

export const movieService = { fetchMovies, fetchInterestingFacts };
export default movieService;
