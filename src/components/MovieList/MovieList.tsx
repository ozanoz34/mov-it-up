import { useQuery } from 'react-query';

import MovieAPI from '../../api/MovieAPI/MovieAPI';
import { QUERY, MovieListModel, ErrorResponseModel } from '../../api/MovieAPI/MovieAPI.model';

import MovieListItem from '../MovieListItem';
import Alert from '../Alert';

import * as Styled from './MovieList.styles';

const MovieList = () => {
  const { data, isError, isSuccess, error } = useQuery<
    MovieListModel, ErrorResponseModel
  >(QUERY.POPULAR_MOVIES, MovieAPI.getPopularMovies);

  if(isError) {
    return <Alert severity="error">{error?.response.status}: {error?.response.data.status_message}</Alert>;
  }

  return (
    <>
      {isSuccess && (
        <Styled.ListContainer>
          {data?.results.map((movie) => <MovieListItem movieItem={movie} key={movie.id}/>)}
        </Styled.ListContainer>
      )}
    </>
  );
};

export default MovieList;