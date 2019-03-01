import * as React from 'react';
interface StyledDropdownProps {
    label?: string;
    open: boolean;
    options: object[];
    selected: string;
    inlineMessage?: string;
    error?: boolean;
    openDropdown: () => void;
    closeDropdown: () => void;
    selectOption: (event: React.SyntheticEvent) => void;
}
declare class StyledDropdown extends React.Component<StyledDropdownProps> {
    renderOptions(): object[] | JSX.Element;
    render(): JSX.Element;
}
export default StyledDropdown;
