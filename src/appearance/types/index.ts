type ThemeConfigurationModel = {
  dark: ThemeModel;
  light: ThemeModel;
};

type ThemeModel = {
  common: {
    titleColor: string;
    backgroundColor: string;
    textColor: string;
    titleBackgroundColor: string;
    switchLabelColor: string;
    favoriteIconColor: string;
    watchListIconColor: string;
    notFoundBgColor: string;
  }
};

type StyledPropsModel<T = {}> = {
  theme: ThemeModel;
} & T;

export type { StyledPropsModel, ThemeModel, ThemeConfigurationModel };