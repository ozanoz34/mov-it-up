import styled from 'styled-components';
import { Typography } from '@mui/material';
import { StyledPropsModel } from '../../appearance/types';

const PageHeader = styled(Typography)<StyledPropsModel>`
  min-height: 80px;
  font-size: 2rem !important;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(({theme})=> theme.common.titleColor)};
  background-color: ${(({theme})=> theme.common.titleBackgroundColor)};
  font-weight: bold !important;
`;

export { PageHeader }