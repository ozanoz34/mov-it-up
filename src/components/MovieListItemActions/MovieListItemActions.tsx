import { Tooltip } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import * as Styled from './MovieListItemActions.styles';

type Props = {
  id: number;
  favorites: number[];
  watchList: number[];
  addToFavorites: (id: number) => void;
  addToWatchList: (id: number) => void;
};

const MovieListItemActions = ({addToFavorites, addToWatchList, id, favorites, watchList}: Props) => (
  <Styled.ActionsContainer data-testid="movie-card-actions">
    <Tooltip title="Favorites">
      <Styled.AddFavouriteIcon onClick={() => addToFavorites(id)} data-testid="movie-card-add-fav">
        {favorites.includes(id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </Styled.AddFavouriteIcon>
    </Tooltip>
    <Tooltip title="WatchList">
      <Styled.AddWatchListIcon onClick={() => addToWatchList(id)} data-testid="movie-card-add-watch">
        {watchList.includes(id) ? <RemoveIcon /> :<AddIcon />}
      </Styled.AddWatchListIcon>
    </Tooltip>
  </Styled.ActionsContainer>
);

export default MovieListItemActions;