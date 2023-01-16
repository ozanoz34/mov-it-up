import styled from 'styled-components';
import { Typography } from '@mui/material';

import { StyledPropsModel } from '../../appearance/types';

const MovieTitle = styled(Typography)<StyledPropsModel>`
  font-size: 1.5rem !important;
  display: flex;
  margin: 30px 0 !important;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(({theme}) => theme.common.textColor)} !important;
`;

const MovieOverview = styled(Typography)<StyledPropsModel>`
  color: ${(({theme}) => theme.common.textColor)} !important;
  padding: 10px 0;
`;

const IconLink = styled.a`
  margin-right: 20px;
`;

export { IconLink, MovieTitle, MovieOverview };