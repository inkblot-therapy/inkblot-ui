import * as React from 'react';
import StyledIconButton from './styled/StyledIconButton';

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

class IconButton extends React.Component<IconButtonProps, IconButtonState> {
  public static defaultProps: IconButtonProps = {
    disabled: false,
    onClick: () => undefined,
    primary: false,
    secondary: false,
    rounded: true,
    singleClick: true,
    style: {},
    tertiary: false,
    component: 'button',
  };

  public state: IconButtonState = {
    disableClick: false,
  };

  public click = (): boolean => {
    if (this.state.disableClick && this.props.singleClick) {
      return false;
    }
    this.props.onClick();
    this.setState({ disableClick: true });
    return false;
  }

  public render() {
    const { disabled, children } = this.props;
    return (
      <StyledIconButton
        {...this.props}
        onClick={!disabled ? this.click : () => undefined}
      >
        {children}
      </StyledIconButton>
    );
  }
}

export default IconButton;
