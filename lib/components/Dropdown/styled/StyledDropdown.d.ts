import * as React from 'react';
interface StyledDropdownProps {
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
declare class StyledDropdown extends React.Component<StyledDropdownProps> {
    renderSelectedOptions(): object[] | JSX.Element;
    renderOptions(): object[] | JSX.Element;
    render(): JSX.Element;
}
export default StyledDropdown;
