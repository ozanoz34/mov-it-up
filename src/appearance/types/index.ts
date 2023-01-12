type ThemeConfigurationModel = {
  dark: ThemeModel;
  light: ThemeModel;
};

type ThemeModel = {
  common: {
    titleColor: string;
    backgroundColor: string;
    textColor: string;
    buttonBgColor: string;
    buttonTextColor: string;
  }
};

type StyledPropsModel<T = {}> = {
  theme: ThemeModel;
} & T;

export type { StyledPropsModel, ThemeModel, ThemeConfigurationModel };