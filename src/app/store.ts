import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import moviesSliceReducer from '../redux/Movies.redux';

export const store = configureStore({
  reducer: {
    movies: moviesSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
