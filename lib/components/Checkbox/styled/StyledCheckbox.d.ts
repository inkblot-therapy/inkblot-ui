import * as React from 'react';
import { CheckboxProps } from '../Checkbox';
export interface CheckboxState {
    value?: string;
    checked: boolean;
}
declare class StyledCheckbox extends React.Component<CheckboxProps, CheckboxState> {
    constructor(props: CheckboxProps);
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export default StyledCheckbox;
