import * as _ from 'lodash';
import * as React from 'react';
import StyledDropdown from './styled/StyledDropdown';

/* TODO: Add in SVGs
         Fix onChange/value
         Reformat (de)selectOption
 */

interface DropdownProps {
  /** Label above the dropdown */
  label?: string;
  /** Placeholder for the dropdown */
  placeholder?: string;
  /** Options to be displayed in the dropdown */
  options: object[];
  /** Name of the input in the form */
  name?: string;
  /** Default options that are selected */
  defaultValue?: object[];
  /** Handler function when input changes */
  onChange?: (event: React.SyntheticEvent) => void;
  /** Control the current input value (e.g. ["1", "4", "7"]) */
  value?: string[];
  /** Inline message below the dropdown */
  inlineMessage?: string;
  /** Present if there is an error */
  error?: boolean;
}

interface DropdownState {
  open: boolean;
  selected: object[];
  options: object[];
  value: string[] | undefined;
}

class Dropdown extends React.Component<DropdownProps, DropdownState> {
  constructor(props: DropdownProps) {
    super(props);
    this.state = {
      open: false,
      options: this.removeDefaultValues(
        props.options,
        props.defaultValue || [],
      ),
      selected: props.defaultValue || [],
      value: props.value,
    };

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.deselectOption = this.deselectOption.bind(this);
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
    event.stopPropagation();
    const { id } = event.currentTarget;
    const newOption = _.find(
      this.state.options,
      (option: { value: any }) => option.value.toString() === id.toString(),
    );
    const filteredOptions = _.filter(
      this.state.options,
      (option: { value: any }) => option.value.toString() !== id.toString(),
    );

    if (newOption) {
      this.setState(
        {
          options: filteredOptions,
          selected: [...this.state.selected, newOption],
        },
        () => {
          const optionsStringArray = _.map(
            this.state.selected,
            (option: { value: any }) => option.value.toString(),
          );
          this.setState({
            value: optionsStringArray,
          });
        },
      );
    }
  }

  public deselectOption(event: React.SyntheticEvent): void {
    event.stopPropagation();
    const { id } = event.currentTarget;
    const newOption = _.find(
      this.state.selected,
      (option: { value: any }) => option.value.toString() === id.toString(),
    );
    const filteredOptions = _.filter(
      this.state.selected,
      (option: { value: any }) => option.value.toString() !== id.toString(),
    );

    if (newOption) {
      this.setState(
        {
          options: _.sortBy([...this.state.options, newOption], ['value']),
          selected: filteredOptions,
        },
        () => {
          const optionsStringArray = _.map(
            this.state.selected,
            (option: { value: any }) => option.value.toString(),
          );
          this.setState({
            value: optionsStringArray,
          });
        },
      );
    }
  }

  public render(): JSX.Element {
    const { name, label, placeholder, inlineMessage, error } = this.props;
    const { value, open, options, selected } = this.state;

    return (
      <div>
        <input
          style={{ display: 'none' }}
          name={name}
          value={value}
          onChange={this.handleChange}
        />
        <StyledDropdown
          label={label}
          placeholder={placeholder}
          open={open}
          openDropdown={this.openDropdown}
          closeDropdown={this.closeDropdown}
          options={options}
          selectOption={this.selectOption}
          selected={selected}
          deselectOption={this.deselectOption}
          inlineMessage={inlineMessage}
          error={error}
        />
      </div>
    );
  }

  private handleChange(event: React.SyntheticEvent): void {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  private removeDefaultValues(
    options: object[],
    defaultValue: object[],
  ): object[] {
    if (defaultValue.length === 0) {
      return options;
    }

    const optionsWithoutDefaults = options;

    _.forEach(defaultValue, (defaultOption: { value: any }) => {
      const index = optionsWithoutDefaults.findIndex(
        (option: { value: any }) => option.value === defaultOption.value,
      );
      if (index >= 0) {
        optionsWithoutDefaults.splice(index, 1);
      }
    });

    return optionsWithoutDefaults;
  }
}

export default Dropdown;
