interface Colors {
  disabled: string;
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface ThemeInterface {
  button: {
    backgroundColor: Colors;
    textColor: Colors;
  };
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
};

export default theme;
