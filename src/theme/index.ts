interface Colors {
  disabled: string;
  primary: string;
  secondary: string;
  tertiary: string;
  people: string;
}

interface StringMap {
  [s: string]: string;
}

interface Text {
  inline: StringMap;
  label: StringMap;
  standard: StringMap;
  selectedOption: StringMap;
}

export interface ThemeInterface {
  button: {
    backgroundColor: Colors;
    textColor: Colors;
  };
  input: {
    text: Text;
  };
}

const theme: ThemeInterface = {
  button: {
    backgroundColor: {
      disabled: '#ecf2f4',
      primary: 'linear-gradient(to left, #e938cc, #fc587f)',
      secondary: 'linear-gradient(to left, #24a47a, #41ddcc)',
      tertiary: '#ffffff',
      people: 'linear-gradient(to left, #e3546f, #ff6b8a)',
    },
    textColor: {
      disabled: 'rgba(15, 32, 69, 0.25)',
      primary: '#ffffff',
      secondary: '#ffffff',
      tertiary: '#2e5fca',
      people: '#ffffff',
    },
  },
  input: {
    text: {
      inline: {
        fontFamily: '"Source Sans Pro", sans-serif',
        fontSize: '12px',
        fontStretch: 'normal',
        fontStyle: 'normal',
        fontWeight: '600',
        letterSpacing: '0.1px',
        lineHeight: 'normal',
      },
      label: {
        color: '#0f2045',
        fontFamily: '"Source Sans Pro", sans-serif',
        fontSize: '12px',
        fontStretch: 'normal',
        fontStyle: 'normal',
        fontWeight: '600',
        letterSpacing: '0.1px',
        lineHeight: 'normal',
        marginBottom: '20px',
      },
      selectedOption: {
        color: '#2e5fca',
        fontFamily: '"Source Sans Pro", sans-serif',
        fontSize: '12px',
        fontStretch: 'normal',
        fontStyle: 'normal',
        fontWeight: '600',
        letterSpacing: '0.1px',
        lineHeight: 'normal',
      },
      standard: {
        color: '#0f2045',
        fontFamily: '"Source Sans Pro", sans-serif',
        fontSize: '16px',
        fontStretch: 'normal',
        fontStyle: 'normal',
        fontWeight: 'normal',
        letterSpacing: 'normal',
        lineHeight: 'normal',
      },
    },
  },
};

export default theme;
