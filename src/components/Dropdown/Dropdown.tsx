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

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  public toggleDropdown(): void {
    this.setState((prevState: Readonly<DropdownState>) => ({
      open: !prevState.open,
    }));
  }

  public render(): JSX.Element {
    return (
      <StyledDropdown
        label={this.props.label}
        open={this.state.open}
        toggleDropdown={this.toggleDropdown}
      >
        {this.props.children}
      </StyledDropdown>
    );
  }
}

export default Dropdown;
