import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { CardActions } from '@mui/material';

const AddFavouriteIcon = styled(IconButton)`
  color: red !important;
`;

const ActionsContainer = styled(CardActions)`
  justify-content: center;
`;

export { AddFavouriteIcon, ActionsContainer }
