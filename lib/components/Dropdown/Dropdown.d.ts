import * as React from 'react';
export interface DropdownProps {
    /** Options to be displayed in the dropdown */
    options: object[];
    /** Label above the dropdown */
    label?: string;
    /** Name of the input in the form */
    name?: string;
    /** Inline message below the dropdown */
    inlineMessage?: string;
    /** Present if there is an error */
    error?: boolean;
    input?: object;
}
declare class Dropdown extends React.Component<DropdownProps, {}> {
    constructor(props: DropdownProps);
    renderOptions(): React.ReactNode;
    render(): JSX.Element;
}
export default Dropdown;
