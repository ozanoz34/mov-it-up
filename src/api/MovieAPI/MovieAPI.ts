import axios from 'axios';

import { API_KEY, BASE_API_URL, BASE_IMAGE_URL, SESSION_ID } from '../utils/consts';
import { MovieListModel } from './MovieAPI.model';

class MovieAPI {
  static getPopularMovies = (): Promise<MovieListModel> =>
    axios
      .get(`${BASE_API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => response.data);
}

export default MovieAPI;