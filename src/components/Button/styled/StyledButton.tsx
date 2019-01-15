import styled from '../../../utils/styled-components';

const StyledButton = styled<{
  disabled: boolean;
  primary: boolean;
  secondary: boolean;
  tertiary: boolean;
}>('button')`
  border-radius: 20px;
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'not-allowed')};
  height: 40px;
  padding: 10px 40px;
  font-family: "Barlow", sans-serif;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.5px;
  outline: none;
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

export default StyledButton;
