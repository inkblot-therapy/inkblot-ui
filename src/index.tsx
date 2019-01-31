import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Button from './components/Button';
import { ButtonProps } from './components/Button/Button'
import Dropdown from "./components/Dropdown";
import { DropdownProps } from './components/Dropdown/Dropdown'

const ThemeButton = (props: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...props} />
  </ThemeProvider>
);

const ThemeDropdown = (props: DropdownProps) => (
  <ThemeProvider theme={theme}>
    <Dropdown {...props} />
  </ThemeProvider>
);

const InkblotTheme = ({children}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export { default as BookingCalendar } from "./components/BookingCalendar";
export { default as Button } from "./components/Button";
export { default as Dropdown } from "./components/Dropdown";
export { default as Modal } from "./components/Modal";
export { default as SearchDropdown } from "./components/SearchDropdown";
export { default as TextInput } from "./components/TextInput";
export { ThemeButton };
export { ThemeDropdown };
export { InkblotTheme };
