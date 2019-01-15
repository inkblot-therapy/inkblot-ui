interface Colors {
  disabledColor: string;
  primaryColor: string;
}

export interface ThemeInterface {
  colors: Colors;
}

const theme: ThemeInterface = {
  button: {
    backgroundColor: {
      disabled: '#ecf2f4',
      primary: 'linear-gradient(to left, #e938cc, #fc587f)',
      secondary: 'linear-gradient(to left, #24a47a, #41ddcc)',
      tertiary: '#ffffff',
    },
    textColor: {
      disabled: 'rgba(15, 32, 69, 0.25)',
      primary: '#ffffff',
      secondary: '#ffffff',
      tertiary: '#2e5fca',
    },
  },
  colors: {
    disabledColor: '#ecf2f4',
  },
};

export default theme;
