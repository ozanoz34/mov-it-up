import styled from 'styled-components';
import { StyledPropsModel } from '../../appearance/types';

const PageNotFoundContainer = styled.div<StyledPropsModel>`
  background-color: ${(({theme}) => theme.common.notFoundBgColor)};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  alight-items: center;
  justify-content: center;
  min-height: 500px;
  padding: 40px;
`;

export { PageNotFoundContainer };