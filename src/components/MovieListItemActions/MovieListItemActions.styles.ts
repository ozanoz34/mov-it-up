import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { CardActions } from '@mui/material';
import { StyledPropsModel } from '../../appearance/types';

const AddFavouriteIcon = styled(IconButton)<StyledPropsModel>`
  color: ${(({theme}) => theme.common.favoriteIconColor)} !important;
`;

const ActionsContainer = styled(CardActions)`
  justify-content: center;
`;

const AddWatchListIcon = styled(IconButton)<StyledPropsModel>`
  color: ${(({theme}) => theme.common.watchListIconColor)} !important;
`;

export { AddFavouriteIcon, ActionsContainer, AddWatchListIcon }
