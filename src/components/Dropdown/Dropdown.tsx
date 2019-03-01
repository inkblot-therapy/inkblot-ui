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
  /** Handler function when input changes */
  onChange?: (option: object) => void;
  /** Control the current input value */
  value?: object;
  /** Inline message below the dropdown */
  inlineMessage?: string;
  /** Present if there is an error */
  error?: boolean;
}

interface DropdownState {
  open: boolean;
  selected: object;
  options: object[];
  value: object | undefined;
  formValue: string;
}

class Dropdown extends React.Component<DropdownProps, DropdownState> {
  constructor(props: DropdownProps) {
    super(props);
    this.state = {
      formValue:
        _.get(props.value, 'value') || _.get(props.options[0], 'value'),
      open: false,
      options: props.options,
      selected: props.value || props.options[0],
      value: props.value,
    };

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  public openDropdown(): void {
    this.setState(
      {
        open: true,
      },
      () => {
        const dropdownContainer = document.getElementById('dropdown-container');
        if (dropdownContainer) {
          dropdownContainer.focus();
        }
      },
    );
  }

  public closeDropdown(): void {
    this.setState({
      open: false,
    });
  }

  public selectOption(event: React.SyntheticEvent): void {
    const { options } = this.props;
    const { id } = event.currentTarget;
    const selected = _.find(
      options,
      (option: { value: any }) => option.value.toString() === id.toString(),
    );

    if (selected) {
      this.setState({
        formValue: _.get(selected, 'value'),
        open: false,
        selected,
      });
    }
  }

  public render(): JSX.Element {
    const { name, label, inlineMessage, error } = this.props;
    const { open, options, selected, formValue } = this.state;

    return (
      <div>
        <input
          style={{ display: 'none' }}
          name={name}
          value={formValue}
          readOnly={true}
        />
        <StyledDropdown
          label={label}
          open={open}
          options={options}
          selected={selected}
          inlineMessage={inlineMessage}
          error={error}
          openDropdown={this.openDropdown}
          closeDropdown={this.closeDropdown}
          selectOption={this.selectOption}
        />
      </div>
    );
  }
}

export default Dropdown;
