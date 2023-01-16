import { useQuery } from 'react-query';
import { CardMedia } from '@mui/material';

import { BASE_IMAGE_URL } from '../../api/utils/consts';
import MovieAPI from '../../api/MovieAPI/MovieAPI';
import { ErrorResponseModel, MovieListItemModel, QUERY, TrailerResponseModel } from '../../api/MovieAPI/MovieAPI.model';
import { Alert, Spinner, MovieDetails } from '../';

import * as Styled from './MoviePage.styles';

type Props = {
  className?: string; 
}

const MoviePage = ({ className }: Props) => {
  const url = window.location.href.split('/');
  const movieId = url[url.length-1];
  const { data, isSuccess, isError, error, isLoading } = useQuery<MovieListItemModel, ErrorResponseModel>(
    [QUERY.MOVIE_DETAILS, movieId], () => MovieAPI.getMovieDetails(movieId), {
      enabled: !!movieId,
    }
  );
  const trailerQuery = useQuery<TrailerResponseModel, ErrorResponseModel>(
    [QUERY.TRAILER, movieId], () => MovieAPI.getMovieTrailer(movieId), {
      enabled: !!movieId,
    }
  );
  const {
    title,
    release_date,
    poster_path,
    overview,
    homepage,
  } = data || {};
  const movieImage = poster_path ? `${BASE_IMAGE_URL}${poster_path}`: '';
  const videoUrl = `https://www.youtube.com/watch?v=${trailerQuery.data?.results[0].key}`;
  

  if(isError) {
    return <Alert severity="error">{error?.response.status}: {error?.response.data.status_message}</Alert>;
  };

  if(isLoading && trailerQuery.isLoading) {
    return <Spinner open={true} />
  };

  return (
    <>
      {isSuccess && data && (
        <Styled.Section data-testid="movie-page">
          <Styled.ImageContainer>
            <CardMedia
              component="img"
              image={movieImage}
              alt={title}
              style={{borderRadius: '30px'}}
            />
          </Styled.ImageContainer>
          <Styled.DescriptionContainer>
            <MovieDetails
              title={title || ''}
              overview={overview || ''}
              release_date={release_date || ''}
              homepage={homepage || ''}
              videoUrl={videoUrl}
            />
          </Styled.DescriptionContainer>
        </Styled.Section>
      )}
    </>
  );
};

export default MoviePage;