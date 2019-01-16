import * as React from 'react';
import StyledTextInput from './styled/StyledTextInput';

export interface TextInputProps {
  label: string;
  placeholder?: string;
  style?: object;
}

export interface TextInputState {
  value: string;
}

export default class TextInput extends React.Component<
  TextInputProps,
  TextInputState
> {
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
    return (
      <StyledTextInput
        label={this.props.label}
        style={this.props.style}
        placeholder={this.props.placeholder}
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}
