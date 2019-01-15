interface Colors {
  disabledColor: string;
  primaryColor: string;
}

export interface ThemeInterface {
  colors: Colors;
}

const theme: ThemeInterface = {
  buttonColors: {
    disabledColor: '#ecf2f4',
    primaryColor: 'linear-gradient(to left, #e938cc, #fc587f)',
    secondaryColor: 'linear-gradient(to left, #24a47a, #41ddcc)',
    tertiaryColor: '#ffffff',
  },
  colors: {
    disabledColor: '#ecf2f4',
  },
};

export default theme;
