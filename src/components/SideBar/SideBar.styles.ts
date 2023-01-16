import { Button, List, Drawer } from '@mui/material';
import styled from 'styled-components';

import { StyledPropsModel } from '../../appearance/types';

const SideBar = styled(List)<StyledPropsModel>`
  width: 35vh;
`;

const Slider = styled(Drawer)<StyledPropsModel>`
  .MuiPaper-root {
    background-color: ${(({theme}) => theme.common.backgroundColor)};
    color: ${(({theme}) => theme.common.textColor)};
  }
`;

const Link = styled.a`
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
`;

const MenuClose = styled(Button)`
  display: flex;
  justify-content: flex-end !important;

  svg {
    width: 50px;
    height: 50px;
  }
`;

const MenuOpen = styled(Button)`
  position: fixed !important;
  width: 50px;
  height: 50px;
  left: 0;
  top: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export { SideBar, Link, MenuClose, MenuOpen, Slider };