import * as React from 'react';
import StyledDropdown from './styled/StyledDropdown';

interface DropdownProps {
  children: React.ReactNode;
  /** Label for the dropdown */
  label: string;
}

interface DropdownState {
  open: boolean;
}

class Dropdown extends React.Component<DropdownProps, DropdownState> {
  constructor(props: DropdownProps) {
    super(props);
    this.state = {
      open: false,
    };

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
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

  public render(): JSX.Element {
    console.log(this.state);
    return (
      <StyledDropdown
        label={this.props.label}
        open={this.state.open}
        openDropdown={this.openDropdown}
        closeDropdown={this.closeDropdown}
      >
        {this.props.children}
      </StyledDropdown>
    );
  }
}

export default Dropdown;
