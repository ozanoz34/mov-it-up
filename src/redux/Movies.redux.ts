import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { MovieListItemModel } from '../api/MovieAPI/MovieAPI.model';

interface MoviesStateModel {
  movies: MovieListItemModel[] | [];
};

const initialState: MoviesStateModel = {
  movies: [],
};

const reducerName = 'movies';

const moviesSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<MovieListItemModel[]>) => {
      const movies = [...state.movies];
      const movieIds = movies.map(({id}) => id);
      const payloadIds = action.payload.map(({id}) => id);

      if(movieIds.map(elem => payloadIds.includes(elem))) {
        const moviesIdsToAdd = payloadIds.filter(elem => !movieIds.includes(elem));
        const moviesToAdd = action.payload.filter(({id}) => moviesIdsToAdd.includes(id));
        return ({
          ...state,
          movies: [...movies, ...moviesToAdd]
        });
      };

      return ({
        ...state,
        movies: [...movies, ...action.payload]
      })
    },
  }
});

const { setMovies } = moviesSlice.actions;

// Selectors

const getMovies = (state: RootState): MovieListItemModel[] | [] => state[reducerName].movies;

export {
  getMovies,
  setMovies,
};

export default moviesSlice.reducer;