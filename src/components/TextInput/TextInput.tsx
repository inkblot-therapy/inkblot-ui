import * as React from 'react';
import StyledTextInput from './styled/StyledTextInput';

export interface TextInputProps {
  label: string;
  placeholder?: string;
  style?: object;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  value?: string;
}

export interface TextInputState {
  value: string;
}

export default class TextInput extends React.Component<
  TextInputProps,
  TextInputState
> {
  public static defaultProps: TextInputProps = {
    disabled: false,
    label: 'Label',
  };
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
    return <StyledTextInput {...this.props} value={this.state.value} />;
  }
}
