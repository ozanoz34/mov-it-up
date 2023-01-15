import { UseQueryResult, useQuery } from 'react-query';

import { MovieListModel, ErrorResponseModel, QUERY } from '../../api/MovieAPI/MovieAPI.model';
import MovieAPI from '../../api/MovieAPI/MovieAPI';
import { MovieListItem, Alert } from '../';

import * as Styled from './MovieList.styles';

type Props = {
  query: UseQueryResult<MovieListModel, ErrorResponseModel>;
  header: string;
}

const MovieList = ({
  query,
  header,
}: Props) => {
  const { data, isError, isSuccess, error } = query;
  const favoriteMoviesQuery = useQuery<
    MovieListModel, ErrorResponseModel
  >(QUERY.FAVORITE_MOVIES, () => MovieAPI.getFavoriteMovies());
  const watchListMoviesQuery = useQuery<
    MovieListModel, ErrorResponseModel
  >(QUERY.WATCHLIST_MOVIES, () => MovieAPI.getWatchListMovies());
  const favorite: number[] | undefined = favoriteMoviesQuery.data?.results.map(({id}) => id);
  const watchList: number[] | undefined = watchListMoviesQuery.data?.results.map(({id}) => id);

  if(isError) {
    return <Alert severity="error">{error?.response.status}: {error?.response.data.status_message}</Alert>;
  };

  return (
    <>
      <Styled.MovieListHeader variant="h2" color="red">
        {header}
      </Styled.MovieListHeader>
      {isSuccess && data && (
        <Styled.ListContainer>
          {data.results.length > 0 && 
            data.results.map((movie) => 
              <MovieListItem
                movieItem={movie}
                favoriteMoviesQuery={favoriteMoviesQuery}
                watchListMoviesQuery={watchListMoviesQuery}
                key={movie.id}
                favorites={favorite}
                watchList={watchList}
              />
          )}
        </Styled.ListContainer>
      )}
    </>
  );
};

export default MovieList;