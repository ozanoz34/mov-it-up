import {
  createTheme,
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { getIsDark } from '../../../redux/Movies.redux';
import themeConfiguration from '../../theme';
import { ThemeModel } from '../../types';
import GeneralStyles from '../GeneralStyles';

type Props = {
  children: ReactNode;
};

const AppearanceProvider = ({ children }: Props) => {
  const isDarkMode = useSelector(getIsDark);
  const theme: ThemeModel = isDarkMode ? themeConfiguration.dark : themeConfiguration.light;

  const materialTheme = createTheme({
    zIndex: {
      modal: 2000,
      tooltip: 2500,
    },
    palette: {
      type: isDarkMode ? 'dark' : 'light',
      // will change when color pallete is provided
      action: {
        hover: 'rgba(0, 0, 0, 0.08)',
        selected: 'rgba(0, 0, 0, 0.16)',
        disabled: 'rgba(0, 0, 0, 0.3)',
        focus: 'rgba(0, 0, 0, 0.12)',
      },
    },
    typography: {
      body1: {
        fontSize: '1rem',
        lineHeight: 1.1875,
      },
      body2: {
        fontSize: '1rem',
        fontWeight: 300,
        lineHeight: 1.215,
      },
      h4: {
        fontSize: '1.75rem',
        fontWeight: 300,
        lineHeight: 1.215,
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 300,
        lineHeight: 1.2083333333,
      },
    },
  });

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MaterialThemeProvider theme={materialTheme}>
          {children}
          <GeneralStyles />
        </MaterialThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default AppearanceProvider;