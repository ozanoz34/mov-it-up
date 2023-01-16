import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';

import { getSearchResults, setFavoriteList, setWatchList } from '../../redux/Movies.redux';
import { MovieListModel, ErrorResponseModel, QUERY } from '../../api/MovieAPI/MovieAPI.model';
import MovieAPI from '../../api/MovieAPI/MovieAPI';
import { MovieListItem, Alert, PageHeader, Spinner} from '../';
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
  const dispatch = useDispatch();
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
    isLoading,
  } = listType === CREATED_LIST_TYPE.FAVORITE ? favoriteMoviesQuery : watchListMoviesQuery;
  
  useEffect(() => {
    const favorite = favoriteMoviesQuery.data?.results.map(({id}) => id) as number[];
    dispatch(setFavoriteList(favorite));
  }, [dispatch, favoriteMoviesQuery.data]);

  useEffect(() => {
    const watchList = watchListMoviesQuery.data?.results.map(({id}) => id) as number [];
    dispatch(setWatchList(watchList));
  }, [dispatch, watchListMoviesQuery.data]);

  if(isError) {
    return <Alert severity="error">{error?.response.status}: {error?.response.data.status_message}</Alert>;
  };

  if(isLoading) {
    return <Spinner open={true} />
  };

  return (
    <>
      <PageHeader title={header} />
      <Styled.ListContainer data-testid="created-list-container">
      {listType === CREATED_LIST_TYPE.SEARCH_RESULTS ? (
        searchResults?.length > 0 && 
          searchResults.map((movie) => 
            <MovieListItem
              movieItem={movie}
              favoriteMoviesQuery={favoriteMoviesQuery}
              watchListMoviesQuery={watchListMoviesQuery}
              key={movie.id}
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
              isDynamicList={true}
            />
          )
        )}
      </Styled.ListContainer>
      )
    </>
  );
};

export default CreatedList;