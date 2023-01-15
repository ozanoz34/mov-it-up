import { useQuery } from 'react-query';

import MovieAPI from '../../api/MovieAPI/MovieAPI';
import { QUERY, MovieListModel, ErrorResponseModel } from '../../api/MovieAPI/MovieAPI.model';
import { MovieList } from '../';

const AllMovies = () => {
  const allMoviesQuery = useQuery<
    MovieListModel, ErrorResponseModel
  >(QUERY.POPULAR_MOVIES, () => MovieAPI.getPopularMovies());

  return (
    <MovieList
      query={allMoviesQuery}
      header="All Movies"
    />
  );
};

export default AllMovies;