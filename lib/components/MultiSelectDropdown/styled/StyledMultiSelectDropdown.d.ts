import * as React from 'react';
interface StyledMultiSelectDropdownProps {
    label?: string;
    placeholder?: string;
    open: boolean;
    options: object[];
    selected: object[];
    inlineMessage?: string;
    error?: boolean;
    openDropdown: () => void;
    closeDropdown: () => void;
    selectOption: (event: React.SyntheticEvent) => void;
    deselectOption: (event: React.SyntheticEvent) => void;
}
declare class StyledMultiSelectDropdown extends React.Component<StyledMultiSelectDropdownProps> {
    renderSelectedOptions(): object[] | JSX.Element;
    renderOptions(): object[] | JSX.Element;
    render(): JSX.Element;
}
export default StyledMultiSelectDropdown;
