import * as _ from 'lodash';
import * as React from 'react';
import StyledDropdown from './styled/StyledDropdown';

export interface DropdownProps {
  /** Options to be displayed in the dropdown */
  options: object[];
  /** Label above the dropdown */
  label?: string;
  /** Name of the input in the form */
  name?: string;
  /** Inline message below the dropdown */
  inlineMessage?: string;
  /** Present if there is an error */
  error?: boolean;
  input?: object;
}

class Dropdown extends React.Component<DropdownProps, {}> {
  constructor(props: DropdownProps) {
    super(props);
    this.state = {};
  }

  public renderOptions(): React.ReactNode {
    const { options } = this.props;

    return _.map(options, (option: { value: any; label: string }) => (
      <option value={option.value}>{option.label}</option>
    ));
  }

  public render(): JSX.Element {
    const { name, label, inlineMessage, error, input, options } = this.props;

    return (
      <StyledDropdown
        name={name}
        label={label}
        options={options}
        inlineMessage={inlineMessage}
        error={error}
        input={input}
      >
        {this.renderOptions()}
      </StyledDropdown>
    );
  }
}

export default Dropdown;
