import * as _ from 'lodash';
import * as React from 'react';
import StyledDropdown from './styled/StyledDropdown';

// TODO: Clicking on dropdown when open
//       Add name property

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
  }

  public openDropdown(): void {
    if (this.state.open) {
      return;
    }
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
    const { id } = event.currentTarget;
    const intId = parseInt(id, 10);

    this.setState({
      selected: [
        ...this.state.selected,
        _.find(this.state.options, ({ value }) => value === intId),
      ],
      options: _.filter(this.state.options, ({ value }) => value !== intId),
    });
  }

  public render(): JSX.Element {
    console.log(this.state);
    return (
      <StyledDropdown
        label={this.props.label}
        open={this.state.open}
        openDropdown={this.openDropdown}
        closeDropdown={this.closeDropdown}
        options={this.state.options}
        selectOption={this.selectOption}
      />
    );
  }
}

export default Dropdown;
