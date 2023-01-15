import styled from 'styled-components';
import { Card, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { CardActions } from '@mui/material';

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

const AddFavouriteIcon = styled(IconButton)`
  color: red !important;
`;

const ActionsContainer = styled(CardActions)`
  justify-content: center;
`;

const DescriptionContainer = styled(Typography)`
  height: 150px;
`;

export { MovieCard, MovieTitle, AddFavouriteIcon, ActionsContainer, DescriptionContainer }
