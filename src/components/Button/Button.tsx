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
  /** Renders a disabled button and prevents onClick */
  label?: string;
  style?: object;
}

const Button: React.SFC<ButtonProps> = ({
  children,
  disabled = false,
  onClick,
  primary = false,
  secondary = false,
  tertiary = true,
  label,
  style,
}) => (
  <StyledButton
    disabled={disabled}
    primary={primary}
    secondary={secondary}
    tertiary={tertiary}
    onClick={onClick}
    style={...style}
  >
    {label}
  </StyledButton>
);

export default Button;
