import * as React from 'react';
import styled from '../../../utils/styled-components';
import { ButtonProps } from '../Button';

const Button = styled<
  {
    disabled?: boolean;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    people?: boolean;
    error?: boolean;
    type?: string;
  },
  'button'
>('button')`
  border-radius: 20px;
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'not-allowed')};
  height: 40px;
  padding: 0 40px;
  font-family: ${({ people }) => (!people ? '"Barlow", sans-serif;' : '"Montserrat", sans-serif;')}
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  outline: none;
  &:focus {
    outline: none;
  }
  color: ${({ disabled, primary, secondary, tertiary, people, theme }) => {
    if (disabled) {
      return theme.button.textColor.disabled;
    } else if (primary) {
      return theme.button.textColor.primary;
    } else if (secondary) {
      return theme.button.textColor.secondary;
    } else if (people) {
      return theme.button.textColor.people;
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
  background-image: ${({ primary, secondary, people, theme }) => {
    if (primary) {
      return theme.button.backgroundColor.primary;
    } else if (secondary) {
      return theme.button.backgroundColor.secondary;
    } else if (people) {
      return theme.button.backgroundColor.people;
    } else {
      return 'none';
    }
  }};
  border: none;
  box-shadow: ${({ tertiary, theme }) =>
    tertiary && '0 0 10px 0 rgba(99, 140, 177, 0.2)'};
`;

class StyledButton extends React.Component<ButtonProps> {
  public render() {
    return <Button {...this.props}>{this.props.children}</Button>;
  }
}

export default StyledButton;
