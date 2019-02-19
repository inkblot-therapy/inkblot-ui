import * as React from 'react';
import StyledCheckbox from './styled/StyledCheckbox';

export interface CheckboxProps {
  /** Callback function to be called when user checks the box */
  onChange: (checked: boolean) => void;
  /** Renders a disabled button and prevents onChange */
  disabled?: boolean;
  /** Checked state of the Checkbox */
  checked?: boolean;
  /** name */
  name: string;
  /** Label of the Checkbox */
  label: string;
  /** Value of the Checkbox */
  value?: string;
  /** Extra styles */
  style?: object;
  /** className */
  className?: string;
}

interface CheckboxState {
  checked: boolean;
}

class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
  public static defaultProps: CheckboxProps = {
    disabled: false,
    label: '',
    onChange: () => undefined,
    checked: false,
    style: {},
    name: '',
  };

  public state: CheckboxState = {
    checked: false,
  };

  public change = (event): boolean => {
    this.setState({ checked: event });
    this.props.onChange(event);
    return false;
  }

  public render() {
    const { disabled } = this.props;
    return (
      <StyledCheckbox
        {...this.props}
        onChange={!disabled ? this.change : () => undefined}
      />
    );
  }
}

export default Checkbox;
