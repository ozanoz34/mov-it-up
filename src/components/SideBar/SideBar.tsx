import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import * as Styled from './SideBar.styles';

type Props = {
  className?: string;
}

const SideBar = ({className}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  const navigationList = () => (
    <Styled.SideBar className={className}>
      <ListItem>
        <ListItemButton>
        <Styled.Link href="/">
            Movie List
          </Styled.Link>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <Styled.Link href="/watch-list">
            Watch List
          </Styled.Link>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <Styled.Link href="/favorite-list">
            Favorite List
          </Styled.Link>
        </ListItemButton>
      </ListItem>
    </Styled.SideBar>
  );

  return (
    <>
      {!isMenuOpen && (
        <Styled.MenuOpen onClick={() => setIsMenuOpen(true)} className={className}>
          <MenuIcon />
        </Styled.MenuOpen>
      )}
      <Drawer
        open={isMenuOpen}
        onClose={handleClose}
      >
        <Styled.MenuClose onClick={handleClose} className={className}>
          <CloseIcon />
        </Styled.MenuClose>
        {navigationList()}
      </Drawer>
    </>
  );
};

export default SideBar;