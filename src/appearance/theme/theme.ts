import { ThemeConfigurationModel } from '../types';

const colors = {
  darkGray: '#0c0c0c',
  black: '#000000',
  red: '#ff0000',
  gray: '#a9a9a9',
  lightYellow: '#ffffed',
  white: '#ffffff',
};

const theme: ThemeConfigurationModel = {
  dark: {
    common: {
      titleColor: colors.white,
      titleBackgroundColor: colors.darkGray,
      backgroundColor: colors.darkGray,
      textColor: colors.white,
      switchLabelColor: colors.white,
      favoriteIconColor: colors.red,
      watchListIconColor: colors.white,
      notFoundBgColor: colors.darkGray,
    }
  },
  light: {
    common: {
      titleColor: colors.black,
      backgroundColor: colors.white,
      textColor: colors.black,
      titleBackgroundColor: colors.lightYellow,
      switchLabelColor: colors.black,
      favoriteIconColor: colors.red,
      watchListIconColor: colors.black,
      notFoundBgColor: colors.lightYellow,
    }
  }
}

export default theme;