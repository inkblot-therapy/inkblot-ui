import * as React from 'react';
interface StyledDropdownProps {
    options: object[];
    name?: string;
    label?: string;
    inlineMessage?: string;
    error?: boolean;
    input?: object;
}
declare class StyledDropdown extends React.Component<StyledDropdownProps> {
    render(): JSX.Element;
}
export default StyledDropdown;
