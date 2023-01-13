import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { CardActionArea } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';

import { MovieListItemModel } from '../../api/MovieAPI/MovieAPI.model';
import { BASE_IMAGE_URL } from '../../api/utils/consts';
import * as Styled from './MovieListItem.styles';
import { truncate } from './MovieListItem.helpers';

type Props = {
  movieItem: MovieListItemModel;
  className?: string;
};

const MovieListItem = ({ movieItem, className }: Props) => {
  const { title, overview, release_date, poster_path, id} = movieItem;
  const movieImage = poster_path ? `${BASE_IMAGE_URL}${poster_path}`: '';

  const addToFavorites = (id: number) => {
    console.log(id);
  }

  const addToWatchList = (id: number) => {
    console.log(id);
  }

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
            <a href="#">Read More</a>
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Release Date: {release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Styled.ActionsContainer>
        <Styled.AddFavouriteIcon onClick={() => addToFavorites(id)}>
          <FavoriteBorderIcon />
        </Styled.AddFavouriteIcon>
        <IconButton onClick={() => addToWatchList(id)}>
          <AddIcon />
        </IconButton>
      </Styled.ActionsContainer>
    </Styled.MovieCard>
  );
};

export default MovieListItem;