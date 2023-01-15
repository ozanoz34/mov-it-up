import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from '@mui/material';

import { setIsDark } from '../../redux/Movies.redux';

import * as Styled from './ThemeSwitch.styles';

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    dispatch(setIsDark(checked));
  }, [dispatch, checked])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Styled.SwitchContainer>
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