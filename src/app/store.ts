import { configureStore, ThunkAction, Action, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';

import movieReducer from '../features/movies/movieReducer';

export const store = configureStore({
  reducer: {
    page_movies: movieReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  null,
  Action<string>
>;
export type AppThunkDispatch = ThunkDispatch<RootState, null, AnyAction>;
