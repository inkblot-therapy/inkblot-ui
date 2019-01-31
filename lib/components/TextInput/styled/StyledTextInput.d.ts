import * as React from 'react';
import { TextInputProps } from '../TextInput';
export interface TextInputState {
    value?: string;
}
declare class StyledTextInput extends React.Component<TextInputProps, TextInputState> {
    constructor(props: TextInputProps);
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export default StyledTextInput;
