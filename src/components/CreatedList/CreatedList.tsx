import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { getSearchResults } from '../../redux/Movies.redux';
import { MovieListModel, ErrorResponseModel, QUERY } from '../../api/MovieAPI/MovieAPI.model';
import MovieAPI from '../../api/MovieAPI/MovieAPI';
import { MovieListItem, Alert } from '../';
import { CREATED_LIST_TYPE } from './CreatedList.models';

import * as Styled from '../MovieList/MovieList.styles';;

type Props = {
  header: string;
  listType: CREATED_LIST_TYPE;
}

const CreatedList = ({
  header,
  listType,
}: Props) => {
  const searchResults = useSelector(getSearchResults);
  const favoriteMoviesQuery = useQuery<
    MovieListModel, ErrorResponseModel
  >(QUERY.FAVORITE_MOVIES, () => MovieAPI.getFavoriteMovies());
  const watchListMoviesQuery = useQuery<
    MovieListModel, ErrorResponseModel
  >(QUERY.WATCHLIST_MOVIES, () => MovieAPI.getWatchListMovies());
  const { 
    data,
    isError,
    isSuccess,
    error,
  } = listType === CREATED_LIST_TYPE.FAVORITE ? favoriteMoviesQuery : watchListMoviesQuery;
  const favoriteIds = favoriteMoviesQuery.data?.results.map(({id}) => id);
  const watchListIds = watchListMoviesQuery.data?.results.map(({id}) => id);

  if(isError) {
    return <Alert severity="error">{error?.response.status}: {error?.response.data.status_message}</Alert>;
  };

  return (
    <>
      <Styled.MovieListHeader variant="h2" color="red">
        {header}
      </Styled.MovieListHeader>
      <Styled.ListContainer>
      {listType === CREATED_LIST_TYPE.SEARCH_RESULTS ? (
        searchResults?.length > 0 && 
          searchResults.map((movie) => 
            <MovieListItem
              movieItem={movie}
              favoriteMoviesQuery={favoriteMoviesQuery}
              watchListMoviesQuery={watchListMoviesQuery}
              key={movie.id}
              favorites={favoriteIds}
              watchList={watchListIds}
            />
        )
      ): (
        data && data?.results?.length > 0 && isSuccess &&
          data.results.map((movie) => 
            <MovieListItem
              movieItem={movie}
              favoriteMoviesQuery={favoriteMoviesQuery}
              watchListMoviesQuery={watchListMoviesQuery}
              key={movie.id}
              favorites={favoriteIds}
              watchList={watchListIds}
            />
          )
        )}
      </Styled.ListContainer>
      )
    </>
  );
};

export default CreatedList;