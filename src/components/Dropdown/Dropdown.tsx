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
    this.setState(
      {
        open: true,
      },
      () => document.getElementById('dropdown-container').focus(),
    );
  }

  public closeDropdown(): void {
    this.setState({
      open: false,
    });
  }

  public render(): JSX.Element {
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
