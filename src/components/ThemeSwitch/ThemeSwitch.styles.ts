import styled from 'styled-components';
import { StyledPropsModel } from '../../appearance/types';

const SwitchLabel = styled.p<StyledPropsModel>`
  color: ${(({theme}) => theme.common.switchLabelColor)};
  font-weight: bold;
`;

const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export { SwitchLabel, SwitchContainer };