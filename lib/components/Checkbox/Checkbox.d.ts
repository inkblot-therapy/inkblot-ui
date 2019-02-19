import * as React from 'react';
export interface CheckboxProps {
    /** Callback function to be called when user checks the box */
    onChange: (checked: boolean) => void;
    /** Renders a disabled button and prevents onChange */
    disabled?: boolean;
    /** Checked state of the Checkbox */
    checked?: boolean;
    /** name */
    name: string;
    /** Label of the Checkbox */
    label: string;
    /** Value of the Checkbox */
    value?: string;
    /** Extra styles */
    style?: object;
    /** className */
    className?: string;
}
interface CheckboxState {
    checked: boolean;
}
declare class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    static defaultProps: CheckboxProps;
    state: CheckboxState;
    change: (event: any) => boolean;
    render(): JSX.Element;
}
export default Checkbox;
