import * as _ from 'lodash';
import * as React from 'react';
import StyledDropdown from './styled/StyledDropdown';

/* TODO: Add in SVGs
 */

interface DropdownProps {
  /** Label for the dropdown */
  label: string;
  /** Options to be displayed in the dropdown */
  options: object[];
  /** Name of the input in the form */
  name?: string;
  /** Default options that are selected */
  defaultValue?: object[];
}

interface DropdownState {
  open: boolean;
  selected: object[];
  options: object[];
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
      this.setState({
        options: filteredOptions,
        selected: [...this.state.selected, newOption],
      });
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
      this.setState({
        options: _.sortBy([...this.state.options, newOption], ['value']),
        selected: filteredOptions,
      });
    }
  }

  public render(): JSX.Element {
    return (
      <div>
        <input
          style={{ display: 'none' }}
          name={this.props.name}
          value={this.value()}
        />
        <StyledDropdown
          label={this.props.label}
          open={this.state.open}
          openDropdown={this.openDropdown}
          closeDropdown={this.closeDropdown}
          options={this.state.options}
          selectOption={this.selectOption}
          selected={this.state.selected}
          deselectOption={this.deselectOption}
        />
      </div>
    );
  }

  private value(): string[] {
    return _.map(this.state.selected, (option: { value: any }) =>
      option.value.toString(),
    );
  }

  private removeDefaultValues(
    options: object[],
    defaultValue: object[],
  ): object[] {
    if (defaultValue.length === 0) {
      return options;
    }
    const optionsWithoutDefault = options;

    _.forEach(defaultValue, (defaultOption: { value: any }) => {
      const index = optionsWithoutDefault.findIndex(
        (option: { value: any }) => option.value === defaultOption.value,
      );
      if (index >= 0) {
        optionsWithoutDefault.splice(index, 1);
      }
    });

    return optionsWithoutDefault;
  }
}

export default Dropdown;
