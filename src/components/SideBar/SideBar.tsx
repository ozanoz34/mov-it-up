import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { ListItem, ListItemButton, Drawer } from '@mui/material';
import * as Styled from './SideBar.styles';

type Props = {
  className?: string;
}

const SideBar = ({className}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  const navigationList = () => (
    <Styled.SideBar className={className} data-testid="sidebar-link-list">
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
        <Styled.MenuOpen onClick={() => setIsMenuOpen(true)} className={className} data-testid="sidebar-open-icon">
          <MenuIcon />
        </Styled.MenuOpen>
      )}
      <Drawer
        open={isMenuOpen}
        onClose={handleClose}
      >
        <Styled.MenuClose onClick={handleClose} className={className} data-testid="sidebar-close-icon">
          <CloseIcon />
        </Styled.MenuClose>
        {navigationList()}
      </Drawer>
    </>
  );
};

export default SideBar;