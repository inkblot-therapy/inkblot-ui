import * as React from 'react';
import styled from '../../../utils/styled-components';
import { IconButtonProps } from '../IconButton';

const IconButton = styled<
  {
    disabled?: boolean;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    rounded?: boolean;
    component?: string;
  },
  'button'
>('button')`
  flex: 0 0 auto;
  border-radius: ${({ rounded }) => (rounded ? '50%' : '4px')};
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'not-allowed')};
  padding: 12px;
  outline: none;
  text-align: center;
  &:focus {
    outline: none;
  }
  color: ${({ disabled, primary, secondary, tertiary, theme }) => {
    if (disabled) {
      return theme.button.textColor.disabled;
    } else if (primary) {
      return theme.button.textColor.primary;
    } else if (secondary) {
      return theme.button.textColor.secondary;
    } else {
      return theme.button.textColor.tertiary;
    }
  }};
  background-color: ${({ disabled, tertiary, theme }) => {
    if (disabled) {
      return theme.button.backgroundColor.disabled;
    } else {
      return theme.button.backgroundColor.tertiary;
    }
  }};
  background-image: ${({ primary, secondary, theme }) => {
    if (primary) {
      return theme.button.backgroundColor.primary;
    } else if (secondary) {
      return theme.button.backgroundColor.secondary;
    } else {
      return 'none';
    }
  }};
  border: none;
  box-shadow: ${({ tertiary, theme }) =>
    tertiary && '0 0 10px 0 rgba(99, 140, 177, 0.2)'};
`;

class StyledIconButton extends React.Component<IconButtonProps> {
  public render() {
    return (
      <IconButton {...this.props}>
        <span style={{ width: '100%', display: 'flex', position: 'relative' }}>{this.props.children}</span>
      </IconButton>
    );
  }
}

export default StyledIconButton;
