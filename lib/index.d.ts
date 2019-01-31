/// <reference types="react" />
import { ButtonProps } from './components/Button/Button';
import { DropdownProps } from './components/Dropdown/Dropdown';
declare const ThemeButton: (props: ButtonProps) => JSX.Element;
declare const ThemeDropdown: (props: DropdownProps) => JSX.Element;
declare const InkblotTheme: ({ children }: {
    children: any;
}) => JSX.Element;
export { default as BookingCalendar } from "./components/BookingCalendar";
export { default as Button } from "./components/Button";
export { default as Dropdown } from "./components/Dropdown";
export { default as Modal } from "./components/Modal";
export { default as SearchDropdown } from "./components/SearchDropdown";
export { default as TextInput } from "./components/TextInput";
export { ThemeButton };
export { ThemeDropdown };
export { InkblotTheme };
