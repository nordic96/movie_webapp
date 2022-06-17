import { Reducer } from "@reduxjs/toolkit";

import moviesService from '../../services/movies/index';

import { AppThunk, AppThunkDispatch } from "../../app/store";
import { MoviesResponse } from "../../services/movies/types";

export interface MovieState {
    movies: MoviesResponse;
}

export const initialState: MovieState = {
    movies: {
        total: 0,
        entries: [],
    },
};

export enum MovieActions {
    SET_MOVIES = 'movies/SET_MOVIES',
}

export type MovieAction =
    | { type: MovieActions.SET_MOVIES, data: MoviesResponse };

const reducer: Reducer<MovieState, any> = (state = initialState, action: MovieAction) => {
    switch (action.type) {
        case MovieActions.SET_MOVIES:
            return { ...state, movies: action.data };
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
    };
    await moviesService.fetchMovies().then(handleFetchMovies);
};

export default reducer;