import styled from 'styled-components';

import { StyledPropsModel } from '../../appearance/types';

const Section = styled.div<StyledPropsModel>`
  background-color: ${(({theme}) => theme.common.backgroundColor)};
  border-radius: 30px;
  margin: 40px auto;
  display: flex;
  flex-direction: row;
  justify-comtemt: center;
  max-width: 1200px;
  align-items: center;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 30%;
  border-radius: 30px;

  @media (max-width: 950px) {
    width: 50%;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

const DescriptionContainer = styled.div`
  width: 70%;
  padding: 20px 40px;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export { Section, ImageContainer, DescriptionContainer };