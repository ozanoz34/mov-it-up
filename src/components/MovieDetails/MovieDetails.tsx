import { Tooltip } from '@mui/material';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import LinkIcon from '@mui/icons-material/Link';

import * as Styled from './MovieDetails.styles';

type Props = {
  title: string;
  overview: string;
  videoUrl: string;
  release_date: string;
  homepage: string;
}

const MovieDetails = ({
  title,
  overview,
  videoUrl,
  release_date,
  homepage,
}: Props) => (
  <>
    <Styled.MovieTitle data-testid="movie-page-title">{title}</Styled.MovieTitle>
    <Styled.MovieOverview variant="body1" align="left">{overview}</Styled.MovieOverview>
    <Styled.MovieOverview variant="subtitle2" align="left">
      Release Date: {release_date}
    </Styled.MovieOverview>
    <Styled.MovieOverview align="left">
      <Tooltip title="Watch Trailer">
        <Styled.IconLink href={videoUrl} target="_blank">
          <SlowMotionVideoIcon />
        </Styled.IconLink>
      </Tooltip>
      <Tooltip title="Visit Movie's Website">
        <Styled.IconLink href={homepage} target="_blank">
          <LinkIcon />
        </Styled.IconLink>
      </Tooltip>
    </Styled.MovieOverview>
  </>
);

export default MovieDetails;