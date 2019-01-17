import * as React from 'react';
import StyledButton from './styled/StyledButton';

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
  /** You Only Click Once (YOCO) */
  singleClick?: boolean;
  /** Label of the Button */
  label: string;
  /** Extra styles */
  style?: object;
  /** className */
  className?: string;
}

interface ButtonState {
  disableClick: boolean; // like this
}

class Button extends React.Component<ButtonProps, ButtonState> {
  public static defaultProps: ButtonProps = {
    disabled: false,
    label: 'default',
    onClick: () => undefined,
    primary: false,
    secondary: false,
    singleClick: true,
    style: {},
    tertiary: true,
  };

  public state: ButtonState = {
    disableClick: false,
  };

  public click = (): boolean => {
    if (this.state.disableClick && this.props.singleClick) {
      return false;
    }
    this.props.onClick();
    this.setState((state) => ({
      disableClick: true,
    }));
    return false;
  }

  public render() {
    const { disabled, label } = this.props;
    return (
      <StyledButton
        {...this.props}
        onClick={!disabled ? this.click : () => undefined}
      >
        {label}
      </StyledButton>
    );
  }
}

export default Button;
