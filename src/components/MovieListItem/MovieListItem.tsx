import { useMutation, UseQueryResult } from 'react-query';
import { CardContent, CardMedia } from '@mui/material';
import { CardActionArea } from '@mui/material';

import { MovieListItemModel, ErrorResponseModel, PostModel, MovieListModel} from '../../api/MovieAPI/MovieAPI.model';
import MovieAPI from '../../api/MovieAPI/MovieAPI';
import { BASE_IMAGE_URL } from '../../api/utils/consts';
import { MovieListItemActions } from '../';
import * as Styled from './MovieListItem.styles';
import { calculateKey } from './MovieListItem.helpers';

type Props = {
  movieItem: MovieListItemModel;
  className?: string;
  favorites?: number[];
  watchList?: number[];
  favoriteMoviesQuery?: UseQueryResult<MovieListModel, ErrorResponseModel>;
  watchListMoviesQuery?: UseQueryResult<MovieListModel, ErrorResponseModel>;
};

const MovieListItem = ({
  movieItem,
  className,
  favorites = [],
  watchList = [],
  favoriteMoviesQuery,
  watchListMoviesQuery,
}: Props) => {
  const {
    mutateAsync: postFavorite,
  } = useMutation<void, ErrorResponseModel, PostModel>(
    MovieAPI.postFavoriteMovies, {
      onSuccess:() => {
        favoriteMoviesQuery?.refetch();
      },
    }
  );
  const {
    mutateAsync: postWatchList,
  } = useMutation<void, ErrorResponseModel, PostModel>(
    MovieAPI.postWatchListMovies, {
      onSuccess:() => {
        watchListMoviesQuery?.refetch();
      },
    }
  );
  const { title, release_date, poster_path, id} = movieItem;
  const movieImage = poster_path ? `${BASE_IMAGE_URL}${poster_path}`: '';

  const addToFavorites = (id: number) => {
    const key = calculateKey(favorites, id);
    postFavorite({id, key});
  };

  const addToWatchList = (id: number) => {
    const key = calculateKey(watchList, id);
    postWatchList({id, key});
  };

  return (
    <Styled.MovieCard className={className} data-testid="movie-card-item">
      <CardActionArea>
        <CardMedia
          component="img"
          image={movieImage}
          alt={title}
        />
        <CardContent>
          <Styled.MovieTitle gutterBottom variant="h5" data-testid="movie-card-title">
            {title}
          </Styled.MovieTitle>
          <Styled.MovieInfo variant="body2" color="text.secondary">
            <a href={`/movie-details/${id}`}>Read More</a>
          </Styled.MovieInfo>
          <Styled.MovieInfo variant="subtitle2" color="text.secondary">
            Release Date: {release_date}
          </Styled.MovieInfo>
        </CardContent>
      </CardActionArea>
      <MovieListItemActions
        id={id}
        favorites={favorites}
        watchList={watchList}
        addToFavorites={addToFavorites}
        addToWatchList={addToWatchList}
      />
    </Styled.MovieCard>
  );
};

export default MovieListItem;