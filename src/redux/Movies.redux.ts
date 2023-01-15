import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { MovieListItemModel } from '../api/MovieAPI/MovieAPI.model';

interface MoviesStateModel {
  searchResults: MovieListItemModel[] | [];
  isDark: boolean;
};

const initialState: MoviesStateModel = {
  searchResults: [],
  isDark: false,
};

const reducerName = 'movies';

const moviesSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<MovieListItemModel[]>) => ({
      ...state,
      searchResults: action.payload,
    }),
    setIsDark: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isDark: action.payload,
    }),
  }
});

const { setSearchResults, setIsDark } = moviesSlice.actions;

// Selectors

const getSearchResults = (state: RootState): MovieListItemModel[] | [] => state[reducerName].searchResults;

const getIsDark = (state: RootState): boolean => state[reducerName].isDark;

export {
  getSearchResults,
  setSearchResults,
  getIsDark,
  setIsDark,
};

export default moviesSlice.reducer;