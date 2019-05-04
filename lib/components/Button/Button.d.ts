import * as React from 'react';
export interface ButtonProps {
    /** Callback function to be called when user clicks on button */
    onClick: () => void;
    children?: React.ReactNode;
    /** Renders a disabled button and prevents onClick */
    disabled?: boolean;
    /** Primary Button */
    primary?: boolean;
    /** Secondary Button */
    secondary?: boolean;
    /** Tertiary Button */
    tertiary?: boolean;
    /** Tertiary Button */
    people?: boolean;
    /** You Only Click Once (YOCO) */
    singleClick?: boolean;
    /** Label of the Button */
    label: string;
    /** Extra styles */
    style?: object;
    /** Type */
    type?: string;
    /** className */
    className?: string;
}
interface ButtonState {
    disableClick: boolean;
}
declare class Button extends React.Component<ButtonProps, ButtonState> {
    static defaultProps: ButtonProps;
    state: ButtonState;
    click: () => boolean;
    render(): JSX.Element;
}
export default Button;
