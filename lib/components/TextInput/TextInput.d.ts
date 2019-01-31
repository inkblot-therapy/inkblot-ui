import * as React from 'react';
export interface TextInputProps {
    /** label */
    label: string;
    /** name */
    name: string;
    /** placeholder */
    placeholder?: string;
    /** label style */
    labelStyle?: object;
    /** input style */
    inputStyle?: object;
    /** disabled */
    disabled?: boolean;
    /** error */
    error?: boolean;
    /** type */
    type?: string;
    /** className of surrounding div .className > label, .className >input */
    className?: string;
    /** inline message, good for error text */
    inlineMessage?: string;
    /** default value of the input */
    value?: string;
    /** onChange  */
    onChange?: (event: object) => void;
}
export default class TextInput extends React.Component<TextInputProps> {
    static defaultProps: TextInputProps;
    render(): JSX.Element;
}
