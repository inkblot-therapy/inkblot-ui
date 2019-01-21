import * as _ from 'lodash';
import * as React from 'react';
import StyledDropdown from './styled/StyledDropdown';

/* TODO: Add name property
         Fix when value is not number
*/

interface DropdownProps {
  /** Label for the dropdown */
  label: string;
  /** Options to be displayed in the dropdown */
  options: object[];
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
      options: props.options,
      selected: [],
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
    );
  }
}

export default Dropdown;
