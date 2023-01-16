import { useMutation, UseQueryResult } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CardContent, CardMedia, CardActionArea } from '@mui/material';

import { MovieListItemModel, ErrorResponseModel, PostModel, MovieListModel} from '../../api/MovieAPI/MovieAPI.model';
import { getFavoriteList, setFavoriteList, getWatchList, setWatchList } from '../../redux/Movies.redux';
import MovieAPI from '../../api/MovieAPI/MovieAPI';
import { BASE_IMAGE_URL } from '../../api/utils/consts';
import { MovieListItemActions } from '../';
import * as Styled from './MovieListItem.styles';
import { calculateKey } from './MovieListItem.helpers';

type Props = {
  movieItem: MovieListItemModel;
  isDynamicList?: boolean; 
  className?: string;
  watchList?: number[];
  favoriteMoviesQuery?: UseQueryResult<MovieListModel, ErrorResponseModel>;
  watchListMoviesQuery?: UseQueryResult<MovieListModel, ErrorResponseModel>;
};

const MovieListItem = ({
  movieItem,
  className,
  favoriteMoviesQuery,
  watchListMoviesQuery,
  isDynamicList = false,
}: Props) => {
  const navigate = useNavigate();
  const favorites = useSelector(getFavoriteList);
  const watchList = useSelector(getWatchList);
  const dispatch = useDispatch();
  const {
    mutateAsync: postFavorite,
  } = useMutation<void, ErrorResponseModel, PostModel>(
    MovieAPI.postFavoriteMovies, {
      onSuccess:() => {
        if(isDynamicList) {
          favoriteMoviesQuery?.refetch();
        }
      },
    }
  );
  const {
    mutateAsync: postWatchList,
  } = useMutation<void, ErrorResponseModel, PostModel>(
    MovieAPI.postWatchListMovies, {
      onSuccess:() => {
        if(isDynamicList) {
          watchListMoviesQuery?.refetch();
        }
      },
    }
  );
  const { title, release_date, poster_path, id} = movieItem;
  const movieImage = poster_path ? `${BASE_IMAGE_URL}${poster_path}`: '';

  const addToFavorites = (id: number) => {
    const key = calculateKey(favorites, id);
    if(key) {
      dispatch(setFavoriteList([...favorites, id]));
    } else {
      dispatch(setFavoriteList(favorites.filter(favorite => favorite !==id)));
    }
    postFavorite({id, key});
  };

  const addToWatchList = (id: number) => {
    const key = calculateKey(watchList, id);
    if(key) {
      dispatch(setWatchList([...watchList, id]));
    } else {
      dispatch(setWatchList(watchList.filter(watchListItem => watchListItem !==id)));
    }
    postWatchList({id, key});
  };

  return (
    <Styled.MovieCard className={className} data-testid="movie-card-item">
      <CardActionArea onClick={() => navigate(`/movie/${id}`)}>
        <CardMedia
          component="img"
          image={movieImage}
          alt={title}
        />
        <CardContent>
          <Styled.MovieTitle gutterBottom variant="h5" data-testid="movie-card-title">
            {title}
          </Styled.MovieTitle>
          <Styled.MovieInfo variant="subtitle2">
            Release Date: {release_date}
          </Styled.MovieInfo>
          <Styled.MovieInfo variant="body2">
            <a href={`/movie/${id}`}>Read More</a>
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