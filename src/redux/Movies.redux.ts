import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { MovieListItemModel } from '../api/MovieAPI/MovieAPI.model';

interface MoviesStateModel {
  searchResults: MovieListItemModel[] | [];
  isDark: boolean;
  favoriteList: number[];
  watchList: number[];
};

const initialState: MoviesStateModel = {
  searchResults: [],
  isDark: true,
  favoriteList: [],
  watchList: [],
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
    setIsDark: (state, action: PayloadAction<boolean>) => {
      localStorage.setItem('DarkMode', JSON.stringify(action.payload));

      return {
        ...state,
        isDark: action.payload,
      };
    },
    setFavoriteList: (state, action: PayloadAction<number[]>) => ({
      ...state,
      favoriteList: action.payload,
    }),
    setWatchList: (state, action: PayloadAction<number[]>) => ({
      ...state,
      watchList: action.payload,
    }),
  }
});

const { setSearchResults, setIsDark, setFavoriteList, setWatchList } = moviesSlice.actions;

// Selectors

const getSearchResults = (state: RootState): MovieListItemModel[] | [] => state[reducerName].searchResults;

const getIsDark = (state: RootState): boolean => state[reducerName].isDark;

const getFavoriteList = (state: RootState): number[] => state[reducerName].favoriteList;

const getWatchList = (state: RootState): number[] => state[reducerName].watchList;

export {
  getSearchResults,
  setSearchResults,
  getIsDark,
  setIsDark,
  getFavoriteList,
  setFavoriteList,
  getWatchList,
  setWatchList,
};

export default moviesSlice.reducer;