import * as React from 'react';
import StyledTextInput from './styled/StyledTextInput';

export interface TextInputProps {}

export interface TextInputState {}

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

  public handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  public render() {
    return (
      <StyledTextInput
        label={this.props.label}
        style={this.props.style}
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}
