import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from '@mui/material';

import { setIsDark } from '../../redux/Movies.redux';

import * as Styled from './ThemeSwitch.styles';

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const initialMode = localStorage.getItem('DarkMode') === 'true' ? true : false;
  const [checked, setChecked] = useState(initialMode); //change at the end

  useEffect(() => {
    dispatch(setIsDark(checked));
  }, [dispatch, checked])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Styled.SwitchContainer data-testid="theme-switch">
      <Styled.SwitchLabel>Theme Switch</Styled.SwitchLabel>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </Styled.SwitchContainer>
  );
};

export default ThemeSwitch;