import * as React from 'react';
import styled from '../../../utils/styled-components';

const Label = styled.p`
  ${({ theme }) => theme.input.text.label}
`;

const Input = styled<{ disabled?: boolean; error?: boolean }, 'input'>('input')`
  ${({ theme }) => theme.input.text.label}
  cursor: ${({ disabled }) => (!disabled ? 'auto' : 'not-allowed')};
  color: ${({ disabled }) => (disabled ? 'rgba(15, 32, 69, 0.25)' : '#0f2045')};
  border: ${({ error }) =>
    error ? 'solid 2px #cf1a1a' : 'solid 2px transparent'};
  margin-bottom: 0;
  min-width: 200px;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  background-color: #fafafa;

  outline: none;
  ::placeholder {
    color: ${({ disabled }) =>
      disabled ? 'rgba(15, 32, 69, 0.25)' : 'rgba(15, 32, 69, 0.75);'};
    font-weight: normal;
    letter-spacing: normal;
  }
`;

const Inline = styled<{ error?: boolean }, 'p'>('p')`
  ${({ theme }) => theme.input.text.inline}
  color: ${({ error }) => (error ? '#cf1a1a' : 'rgba(15, 32, 69, 0.75)')}
`;

interface StyledSearchProps {
  label: string;
  placeholder: string;
  name?: string;
  disabled?: boolean;
  error?: boolean;
  inlineMessage?: string;
}

class StyledSearch extends React.Component<StyledSearchProps> {
  public render(): JSX.Element {
    const {
      label,
      placeholder,
      name,
      disabled,
      error,
      inlineMessage,
    } = this.props;

    return (
      <div>
        <Label>{label}</Label>
        <Input
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          error={error}
        />
        <Inline error={error}>{inlineMessage}</Inline>
      </div>
    );
  }
}

export default StyledSearch;
