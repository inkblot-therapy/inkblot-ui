import * as React from 'react';
interface StyledSearchDropdownProps {
    open: boolean;
    options: object[];
    value: string;
    label?: string;
    placeholder?: string;
    name?: string;
    disabled?: boolean;
    error?: boolean;
    inlineMessage?: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleButtonClick: () => void;
    openDropdown: () => void;
    closeDropdown: () => void;
    selectOption: (event: React.MouseEvent<HTMLDivElement>) => void;
}
declare class StyledSearchDropdown extends React.Component<StyledSearchDropdownProps> {
    renderOptions(): object[] | JSX.Element;
    renderSearchButton(): JSX.Element;
    render(): JSX.Element;
}
export default StyledSearchDropdown;
