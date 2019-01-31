import * as React from 'react';
interface Option {
    label: string;
    value: string | number;
}
interface SearchDropdownProps {
    /** Options in the dropdown */
    options: object[];
    /** Name of the input in the form */
    name?: string;
    /** Determines if the input is disabled or not */
    disabled?: boolean;
    /** Present if there is an error */
    error?: boolean;
    /** Inline message below the search */
    inlineMessage?: string;
    /** Label above the input */
    label?: string;
    /** Placeholder for the input */
    placeholder?: string;
    /** Control the current input value */
    value?: string;
    /** Handler function when input changes */
    onChange?: (value: string) => void;
    /** Handler function when search button is clicked */
    onButtonClick?: () => void;
}
interface SearchDropdownState {
    filteredOptions: Option[];
    formValue: string;
    open: boolean;
    value: string;
}
declare class SearchDropdown extends React.Component<SearchDropdownProps, SearchDropdownState> {
    constructor(props: SearchDropdownProps);
    componentDidUpdate(prevProps: SearchDropdownProps, prevState: SearchDropdownState): void;
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
    handleButtonClick(): void;
    openDropdown(): void;
    closeDropdown(): void;
    selectOption(event: React.MouseEvent<HTMLDivElement>): void;
    render(): JSX.Element;
    private filterOptions;
    private updateValue;
}
export default SearchDropdown;
