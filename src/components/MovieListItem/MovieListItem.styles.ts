import styled from 'styled-components';
import { Card, Typography } from '@mui/material';

const MovieCard = styled(Card)`
  margin: 20px;
  text-align: left;
`;

const MovieTitle = styled(Typography)`
  height: 80px;
  font-size: 1.25rem !important;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export { MovieCard, MovieTitle }
