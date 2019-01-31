import * as React from 'react';
interface DropdownProps {
    /** Options to be displayed in the dropdown */
    options: object[];
    /** Label above the dropdown */
    label?: string;
    /** Placeholder for the dropdown */
    placeholder?: string;
    /** Name of the input in the form */
    name?: string;
    /** Handler function when input changes */
    onChange?: (option: object, action: string) => void;
    /** Control the current input value */
    value?: object[];
    /** Inline message below the dropdown */
    inlineMessage?: string;
    /** Present if there is an error */
    error?: boolean;
}
interface DropdownState {
    open: boolean;
    selected: object[];
    options: object[];
    value: object[] | undefined;
    formValue: string[];
}
declare class Dropdown extends React.Component<DropdownProps, DropdownState> {
    constructor(props: DropdownProps);
    componentDidUpdate(prevProps: DropdownProps): void;
    openDropdown(): void;
    closeDropdown(): void;
    selectOption(event: React.SyntheticEvent): void;
    deselectOption(event: React.SyntheticEvent): void;
    render(): JSX.Element;
    private removeDefaultValues;
    private changeOptions;
    private updateFormValue;
}
export default Dropdown;
