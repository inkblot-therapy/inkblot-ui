import styled from '../../../utils/styled-components';

const StyledButton = styled<
  {
    disabled: boolean;
    primary: boolean;
    secondary: boolean;
    tertiary: boolean;
  },
  'button'
>('button')`
  border-radius: 20px;
  width: 180px;
  height: 40px;
  padding: 0.25em 1em;
  margin: 0 1em;
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.disabledColor : theme.colors.primaryColor};
  border: 2px solid
    ${({ disabled, theme }) =>
      disabled ? theme.colors.disabledColor : theme.colors.primaryColor};
`;

export default StyledButton;
