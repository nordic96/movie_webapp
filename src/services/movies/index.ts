import { MoviesResponse } from "./types";

const fetchMovies = (): Promise<MoviesResponse> => {
    return fetch('./sample.json').then((res) => res.json());
}

export default { fetchMovies }; 