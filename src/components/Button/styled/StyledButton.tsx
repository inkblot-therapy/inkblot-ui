import styled from '../../../utils/styled-components';

// function typeOf(type, theme) {
//   console.log(type, 'haga');
//   if (type.primary) {
//     return `background-image: ${theme.buttonColors.primaryColor}`;
//   } else {
//     // statement(s) will execute if the boolean expression is false
//   }
// }

const StyledButton = styled<{
  disabled: boolean;
  primary: boolean;
  secondary: boolean;
  tertiary: boolean;
}>('button')`
  border-radius: 20px;
  width: 180px;
  height: 40px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background-color: ${({ disabled, tertiary, theme }) => {
    if (disabled) {
      return theme.buttonColors.disabledColor;
    } else {
      return theme.buttonColors.tertiaryColor;
    }
  }};
  background-image: ${({ primary, secondary theme }) => {
    if (primary) {
      return theme.buttonColors.primaryColor;
    } else if (secondary) {
      return theme.buttonColors.secondaryColor;
    } else {
      return 'none';
    }
  }};
  border: 2px solid
    ${({ disabled, theme }) =>
      disabled ? theme.colors.disabledColor : theme.colors.primaryColor};
`;

export default StyledButton;
