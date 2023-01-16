import axios from 'axios';

import { API_KEY, BASE_API_URL, SESSION_ID } from '../utils/consts';
import { MovieListItemModel, MovieListModel, PostModel, TrailerResponseModel } from './MovieAPI.model';

class MovieAPI {
  static getPopularMovies = (): Promise<MovieListModel> =>
    axios
      .get(`${BASE_API_URL}/movie/popular?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.data);

  static getFavoriteMovies = (): Promise<MovieListModel> =>
    axios
      .get(`${BASE_API_URL}/account/a/favorite/movies?api_key=${API_KEY}&session_id=${SESSION_ID}&language=en-US`)
      .then((response) => response.data);

  static getSearchedMovie = (query: string): Promise<MovieListModel> =>
    axios
      .get(`${BASE_API_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
      .then((response) => response.data);

  static getMovieDetails = (movieId: string): Promise<MovieListItemModel> =>
    axios
      .get(`${BASE_API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.data);

  static getMovieTrailer = (movieId: string): Promise<TrailerResponseModel> =>
    axios
      .get(`${BASE_API_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.data);
      
  static getWatchListMovies = (): Promise<MovieListModel> =>
    axios
      .get(`${BASE_API_URL}/account/a/watchlist/movies?api_key=${API_KEY}&session_id=${SESSION_ID}&language=en-US`)
      .then((response) => response.data);
  
  static postFavoriteMovies = ({id, key}: PostModel): Promise<void> => 
    axios
      .post(`${BASE_API_URL}/account/a/favorite?api_key=${API_KEY}&session_id=${SESSION_ID}`, {
        media_type: 'movie',
        media_id: id,
        favorite: key,
      })
      .then((response) => response.data);
  
  static postWatchListMovies = ({id, key}: PostModel): Promise<void> =>
    axios
      .post(`${BASE_API_URL}/account/a/watchlist?api_key=${API_KEY}&session_id=${SESSION_ID}`, {
        media_type: 'movie',
        media_id: id,
        watchlist: key,
      })
      .then((response) => response.data);
}

export default MovieAPI;