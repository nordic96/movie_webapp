import { Reducer } from "@reduxjs/toolkit";

import moviesService from '../../services/movies/index';

import { AppThunk, AppThunkDispatch } from "../../app/store";
import { Movie, MoviesResponse } from "../../services/movies/types";

export interface MovieState {
    movies: MoviesResponse;
    selectedMovie?: Movie;
    loading: boolean;
}

export const initialState: MovieState = {
    movies: {
        total: 0,
        entries: [],
    },
    loading: false,
};

export enum MovieActions {
    SET_MOVIES = 'movies/SET_MOVIES',
    SET_SELECTED_MOVIE = 'movies/SET_SELECTED_MOVIE',
    SET_LOADING =  'movies/SET_LOADING',
}

export type MovieAction =
    | { type: MovieActions.SET_MOVIES, data: MoviesResponse }
    | { type: MovieActions.SET_SELECTED_MOVIE, data: Movie }
    | { type: MovieActions.SET_LOADING, data: boolean };

const reducer: Reducer<MovieState, any> = (state = initialState, action: MovieAction) => {
    switch (action.type) {
        case MovieActions.SET_MOVIES:
            return { ...state, movies: action.data };
        case MovieActions.SET_SELECTED_MOVIE:
            const newMovie: Movie = JSON.parse(JSON.stringify(action.data as Movie));
            return { ...state, selectedMovie: newMovie };
        case MovieActions.SET_LOADING:
            return { ...state, loading: action.data };
        default:
            return state;
    }
};

export const fetchMovies = (): AppThunk => async (dispatch: AppThunkDispatch) => {
    const handleFetchMovies = (res: MoviesResponse) => {
        if (res !== undefined) {
            console.log(res);
            dispatch({ type: MovieActions.SET_MOVIES, data: { ...res } });
        }
        dispatch({ type: MovieActions.SET_LOADING, data: false });
    };
    dispatch({ type: MovieActions.SET_LOADING, data: true });
    setTimeout(() => {
        moviesService.fetchMovies().then(handleFetchMovies);
    }, 1000);
};

export default reducer;