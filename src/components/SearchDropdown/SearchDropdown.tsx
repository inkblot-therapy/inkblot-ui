import * as React from 'react';
import StyledSearchDropdown from './styled/StyledSearchDropdown';

interface SearchDropdownProps {
  /** Optiions in the dropdown */
  options: object[];
  /** Name of the input in the form */
  name?: string;
  /** Determines if the input is disabled or not */
  disabled?: boolean;
  /** Present if there is an error */
  error?: boolean;
  /** Inline message below the search */
  inlineMessage?: string;
}

interface SearchDropdownState {
  open: boolean;
  selected: object;
  value: string;
}

class SearchDropdown extends React.Component<
  SearchDropdownProps,
  SearchDropdownState
> {
  constructor(props: SearchDropdownProps) {
    super(props);
    this.state = {
      open: false,
      selected: {},
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  public openDropdown(): void {
    this.setState({
      open: true,
    });
  }

  public closeDropdown(): void {
    this.setState({
      open: false,
    });
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = event.target;
    this.setState({
      value,
    });
  }

  public render(): JSX.Element {
    const { name, disabled, error, inlineMessage, options } = this.props;
    const { open } = this.state;

    return (
      <StyledSearchDropdown
        name={name}
        disabled={disabled}
        error={error}
        inlineMessage={inlineMessage}
        handleChange={this.handleChange}
        label="Searh"
        placeholder="Searh"
        open={open}
        options={options}
        openDropdown={this.openDropdown}
        closeDropdown={this.closeDropdown}
      />
    );
  }
}

export default SearchDropdown;
