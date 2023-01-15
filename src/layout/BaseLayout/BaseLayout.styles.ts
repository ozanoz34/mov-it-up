import styled from 'styled-components';
import { StyledPropsModel } from '../../appearance/types';

const LayoutWrapper = styled.div<StyledPropsModel & {$url: string}>`
  background-color: red;
  background-image: url(${(({$url}) => $url)});
`;

export { LayoutWrapper };