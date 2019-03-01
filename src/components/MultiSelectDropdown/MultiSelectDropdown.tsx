import * as _ from 'lodash';
import * as React from 'react';
import StyledMultiSelectDropdown from './styled/StyledMultiSelectDropdown';

export interface MultiSelectDropdownProps {
  /** Options to be displayed in the dropdown */
  options: object[];
  /** Label above the dropdown */
  label?: string;
  /** Placeholder for the dropdown */
  placeholder?: string;
  /** Name of the input in the form */
  name?: string;
  /** Handler function when input changes */
  onChange?: (option: object, action: string) => void;
  /** Control the current input value */
  value?: object[];
  /** Inline message below the dropdown */
  inlineMessage?: string;
  /** Present if there is an error */
  error?: boolean;
}

interface MultiSelectDropdownState {
  open: boolean;
  selected: object[];
  options: object[];
  value: object[] | undefined;
  formValue: string[];
}

class MultiSelectDropdown extends React.Component<
  MultiSelectDropdownProps,
  MultiSelectDropdownState
> {
  constructor(props: MultiSelectDropdownProps) {
    super(props);
    // Map value to array of strings
    const formValue = _.map(props.value, (option: { value: any }) =>
      option.value.toString(),
    );
    this.state = {
      formValue,
      open: false,
      options: this.removeDefaultValues(props.options, props.value || []),
      selected: props.value || [],
      value: props.value,
    };

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.deselectOption = this.deselectOption.bind(this);
  }

  public componentDidUpdate(prevProps: MultiSelectDropdownProps): void {
    if (this.props.value !== prevProps.value) {
      this.setState(
        {
          options: this.removeDefaultValues(
            this.state.options,
            this.props.value || [],
          ),
          selected: this.props.value || [],
        },
        () => this.updateFormValue(),
      );
    }
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
    const { open, options, selected, formValue } = this.state;

    return (
      <div>
        <input
          style={{ display: 'none' }}
          name={name}
          value={formValue}
          readOnly={true}
        />
        <StyledMultiSelectDropdown
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

  // Remove any objects that are in defaultValue from options
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

  // Actions to take for selecting and deselecting dropdown options
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

    if (newOption) {
      if (this.props.onChange) {
        const action = deselect ? 'deselect' : 'select';
        this.props.onChange(newOption, action);
      }

      const filteredOptions = _.filter(
        objectArray,
        (option: { value: any }) => option.value.toString() !== id.toString(),
      );
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
    const selectedStringArray = _.map(
      this.state.selected,
      (option: { value: any }) => option.value.toString(),
    );

    this.setState({
      formValue: selectedStringArray,
    });
  }
}

export default MultiSelectDropdown;
