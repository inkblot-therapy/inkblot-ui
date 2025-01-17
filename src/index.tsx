import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

export const InkblotTheme: React.StatelessComponent<{}> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>{children}</div>
  </ThemeProvider>
);

export { default as Button } from './components/Button';
export {
  default as MultiSelectDropdown,
} from './components/MultiSelectDropdown';
export { default as Modal } from './components/Modal';
export { default as SearchDropdown } from './components/SearchDropdown';
export { default as TextInput } from './components/TextInput';
export { default as IconButton } from './components/IconButton';
