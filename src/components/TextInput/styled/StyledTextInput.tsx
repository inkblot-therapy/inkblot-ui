import * as React from 'react';
import styled from '../../../utils/styled-components';
import { TextInputProps } from '../TextInput';

const Input = styled<{ disabled?: boolean; error?: boolean }, 'input'>('input')`
  min-width: 200px;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  color: "#0f2045";
  border: ${({ error }) => (error ? 'solid #cf1a1a' : 'solid transparent')};
  background-color: #fafafa;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px 0 rgba(99, 140, 177, 0.2);
    background-color: #ffffff;
  }
  cursor: ${({ disabled }) => (!disabled ? 'auto' : 'not-allowed')};
  ::placeholder {
    color: ${({ disabled }) =>
      disabled ? 'rgba(15, 32, 69, 0.25)' : 'rgba(15, 32, 69, 0.75);'};
  }
`;

const Label = styled.label`
  color: red;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.1px;
  color: #0f2045;
  display: block;
  margin-bottom: 20px;
`;

export interface TextInputState {
  value: string;
}

class StyledTextInput extends React.Component<TextInputProps, TextInputState> {
  constructor(props: TextInputProps) {
    super(props);

    this.state = {
      value: '',
    };
  }

  public handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  }

  public render() {
    const {
      className,
      label,
      error,
      disabled,
      placeholder,
      value,
    } = this.props;

    return (
      <div className={className}>
        <Label>{label}</Label>
        <Input
          placeholder={placeholder}
          error={error}
          value={value && this.state.value}
          disabled={disabled}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default StyledTextInput;
