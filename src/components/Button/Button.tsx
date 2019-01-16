import * as React from 'react';
import StyledButton from './styled/StyledButton';

interface ButtonProps {
  /** Callback function to be called when user clicks on button */
  onClick: () => {};
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
}

interface ButtonState {
  disableClick: boolean; // like this
}

class Button extends React.Component<ButtonProps, ButtonState> {
  public static defaultProps: ButtonProps = {
    disabled: false,
    label: 'default',
    onClick: () => false,
    primary: false,
    secondary: false,
    singleClick: true,
    style: {},
    tertiary: true,
  };
  public state: ButtonState = {
    disableClick: false,
  };

  public click = () => {
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
        onClick={!disabled ? this.click : () => false}
      >
        {label}
      </StyledButton>
    );
  }
}

export default Button;
