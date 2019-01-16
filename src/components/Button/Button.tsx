import * as React from 'react';
import StyledButton from './styled/StyledButton';

export interface ButtonProps {
  /** Callback function to be called when user clicks on button */
  onClick: () => void;
  children: React.ReactNode;
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

interface MyState {
  disableClick: boolean; // like this
}

class Button extends React.Component<ButtonProps, MyState> {
  public static defaultProps = {
    disabled: false,
    label: 'default',
    onClick: f => f,
    primary: false,
    secondary: false,
    singleClick: true,
    style: {},
    tertiary: true,
  };
  state: MyState = {
    disableClick: false,
  };

  click = () => {
    if (this.state.disableClick && this.props.singleClick) {
      return;
    }
    this.props.onClick();
    this.setState(state => ({
      disableClick: true,
    }));
  }

  render() {
    const { disabled, label } = this.props;
    return (
      <StyledButton {...this.props} onClick={!disabled ? this.click : f => f}>
        {label}
      </StyledButton>
    );
  }
}

export default Button;
