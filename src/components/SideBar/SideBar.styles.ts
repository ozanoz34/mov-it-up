import Button from '@mui/material/Button';
import List from '@mui/material/List';
import styled from 'styled-components';

const SideBar = styled(List)`
  width: 35vh;
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
  position: absolute !important;
  width: 50px;
  height: 50px;
  left: 0;
  top: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export { SideBar, Link, MenuClose, MenuOpen };