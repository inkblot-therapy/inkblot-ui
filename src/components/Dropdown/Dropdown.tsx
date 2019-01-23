import * as _ from 'lodash';
import * as React from 'react';
import StyledDropdown from './styled/StyledDropdown';

/* TODO: Add in SVGs
         Fix value
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
  onChange?: (option: object) => void;
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
    this.changeOptions(event);
  }

  public deselectOption(event: React.SyntheticEvent): void {
    this.changeOptions(event, true);
  }

  public render(): JSX.Element {
    const { name, label, placeholder, inlineMessage, error } = this.props;
    const { value, open, options, selected } = this.state;

    return (
      <div>
        <input style={{ display: 'none' }} name={name} value={value} />
        <StyledDropdown
          label={label}
          placeholder={placeholder}
          open={open}
          options={options}
          selected={selected}
          inlineMessage={inlineMessage}
          error={error}
          openDropdown={this.openDropdown}
          closeDropdown={this.closeDropdown}
          selectOption={this.selectOption}
          deselectOption={this.deselectOption}
        />
      </div>
    );
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

  private changeOptions(
    event: React.SyntheticEvent,
    deselect: boolean = false,
  ): void {
    event.stopPropagation();

    const objectArray = deselect ? this.state.selected : this.state.options;
    const { id } = event.currentTarget;
    const newOption = _.find(
      objectArray,
      (option: { value: any }) => option.value.toString() === id.toString(),
    );
    const filteredOptions = _.filter(
      objectArray,
      (option: { value: any }) => option.value.toString() !== id.toString(),
    );

    if (newOption) {
      if (this.props.onChange) {
        this.props.onChange(newOption);
      }

      if (deselect) {
        this.setState(
          {
            options: _.sortBy([...this.state.options, newOption], ['value']),
            selected: filteredOptions,
          },
          () => this.updateFormValue(),
        );
      } else {
        this.setState(
          {
            options: filteredOptions,
            selected: [...this.state.selected, newOption],
          },
          () => this.updateFormValue(),
        );
      }
    }
  }

  private updateFormValue(): void {
    const optionsStringArray = _.map(
      this.state.selected,
      (option: { value: any }) => option.value.toString(),
    );
    this.setState({
      value: optionsStringArray,
    });
  }
}

export default Dropdown;
