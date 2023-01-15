import { useMutation, UseQueryResult } from 'react-query';
import { CardContent, CardMedia, Typography, Tooltip } from '@mui/material';
import { IconButton } from '@mui/material';
import { CardActionArea } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { MovieListItemModel, ErrorResponseModel, PostModel, MovieListModel} from '../../api/MovieAPI/MovieAPI.model';
import MovieAPI from '../../api/MovieAPI/MovieAPI';
import { BASE_IMAGE_URL } from '../../api/utils/consts';
import * as Styled from './MovieListItem.styles';
import { truncate, calculateKey } from './MovieListItem.helpers';

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
  const { title, overview, release_date, poster_path, id} = movieItem;
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
    <Styled.MovieCard sx={{ width: '20%' }} className={className}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={movieImage}
          alt={title}
        />
        <CardContent>
          <Styled.MovieTitle gutterBottom variant="h5">
            {title}
          </Styled.MovieTitle>
          <Styled.DescriptionContainer variant="body2" color="text.secondary">
            {truncate(overview)}
          </Styled.DescriptionContainer>
          <Typography variant="body2" color="text.secondary">
            <a href={`/movie-details/${id}`}>Read More</a>
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Release Date: {release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Styled.ActionsContainer>
        <Tooltip title="Favorites">
          <Styled.AddFavouriteIcon onClick={() => addToFavorites(id)}>
            {favorites.includes(id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Styled.AddFavouriteIcon>
        </Tooltip>
        <Tooltip title="WatchList">
          <IconButton onClick={() => addToWatchList(id)}>
            {watchList.includes(id) ? <RemoveIcon /> :<AddIcon />}
          </IconButton>
        </Tooltip>
      </Styled.ActionsContainer>
    </Styled.MovieCard>
  );
};

export default MovieListItem;