import styled from 'styled-components';
import { Card, Typography } from '@mui/material';
import { StyledPropsModel } from '../../appearance/types';

const MovieCard = styled(Card)<StyledPropsModel>`
  margin: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px !important;
  background-color: ${(({theme}) => theme.common.backgroundColor)} !important;
  width: 20%;

  @media (max-width: 799px) {
    width: 40%;
  }

  @media (max-width: 550px) {
    width: 60%;
  }
`;

const MovieTitle = styled(Typography)`
  font-size: 1.25rem !important;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(({theme}) => theme.common.textColor)} !important;
`;

const MovieInfo = styled(Typography)`
  color: ${(({theme}) => theme.common.textColor)} !important;
`;

export { MovieCard, MovieTitle, MovieInfo }
