import * as React from 'react';
export interface IconButtonProps {
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
    /** You Only Click Once (YOCO) */
    singleClick?: boolean;
    /** Determins if it's round of square */
    rounded?: boolean;
    /** Extra styles */
    style?: object;
    /** className */
    className?: string;
    /** the containing html element */
    component?: string;
}
interface IconButtonState {
    disableClick: boolean;
}
declare class IconButton extends React.Component<IconButtonProps, IconButtonState> {
    static defaultProps: IconButtonProps;
    state: IconButtonState;
    click: () => boolean;
    render(): JSX.Element;
}
export default IconButton;
