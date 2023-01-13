import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { MovieListItemModel } from '../../api/MovieAPI/MovieAPI.model';
import { BASE_IMAGE_URL } from '../../api/utils/consts';

type Props = {
  movieItem: MovieListItemModel;
  className?: string;
};

const MovieListItem = ({ movieItem, className }: Props) => {
  const { title, overview, release_date, poster_path } = movieItem;
  const movieImage = poster_path ? `${BASE_IMAGE_URL}${poster_path}`: '';
  return (
    <Card sx={{ width: '20%' }} className={className}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={movieImage}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {overview}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Release Date: {release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieListItem;