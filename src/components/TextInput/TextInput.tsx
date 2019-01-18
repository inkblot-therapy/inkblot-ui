import * as React from 'react';
import StyledTextInput from './styled/StyledTextInput';

export interface TextInputProps {
  label: string;
  placeholder?: string;
  style?: {};
  disabled?: boolean;
  error?: boolean;
  className?: string;
  value?: string;
  onChange?: (v?: {}) => void;
}

export default class TextInput extends React.Component<TextInputProps> {
  public static defaultProps: TextInputProps = {
    disabled: false,
    label: 'Label',
    onChange: undefined,
  };

  public render() {
    return <StyledTextInput {...this.props} />;
  }
}
