import styled from 'styled-components';
import { StyledPropsModel } from '../../appearance/types';

const LayoutWrapper = styled.div<StyledPropsModel & {$url: string}>`
  background-image: url(${(({$url}) => $url)});
  min-height: 100vh;
  background-position: 50% 0;
`;

export { LayoutWrapper };