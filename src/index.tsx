import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Button from './components/Button';

const ThemeButton = (props) => (
  <ThemeProvider theme={theme}>
    <Button {...props} />
  </ThemeProvider>
);

export { default as BookingCalendar } from "./components/BookingCalendar";
export { default as Button } from "./components/Button";
export { default as Dropdown } from "./components/Dropdown";
export { default as Modal } from "./components/Modal";
export { default as SearchDropdown } from "./components/SearchDropdown";
export { default as TextInput } from "./components/TextInput";
export { ThemeButton };
