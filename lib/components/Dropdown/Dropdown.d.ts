import * as React from 'react';
export interface DropdownProps {
    /** Options to be displayed in the dropdown */
    options: object[];
    /** Label above the dropdown */
    label?: string;
    /** Name of the input in the form */
    name?: string;
    /** Handler function when input changes */
    onChange?: (option: object) => void;
    /** Control the current input value */
    value?: object;
    /** Inline message below the dropdown */
    inlineMessage?: string;
    /** Present if there is an error */
    error?: boolean;
    input?: object;
}
interface DropdownState {
    open: boolean;
    selected: string;
    options: object[];
    value: object | undefined;
    formValue: string;
}
declare class Dropdown extends React.Component<DropdownProps, DropdownState> {
    constructor(props: DropdownProps);
    openDropdown(): void;
    closeDropdown(): void;
    selectOption(event: React.SyntheticEvent): void;
    render(): JSX.Element;
}
export default Dropdown;
