import * as _ from 'lodash';
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
  /** Label above the input */
  label?: string;
  /** Placeholder for the input */
  placeholder?: string;
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
    this.selectOption = this.selectOption.bind(this);
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = event.target;
    this.setState({
      value,
    });
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

  public selectOption(event: React.MouseEvent<HTMLDivElement>): void {
    const { id } = event.currentTarget;
    this.setState({
      open: false,
      value: id,
    });
  }

  public render(): JSX.Element {
    const {
      name,
      disabled,
      error,
      inlineMessage,
      options,
      label,
      placeholder,
    } = this.props;
    const { open, value } = this.state;

    return (
      <StyledSearchDropdown
        name={name}
        disabled={disabled}
        error={error}
        inlineMessage={inlineMessage}
        open={open}
        options={options}
        value={value}
        label={label}
        placeholder={placeholder}
        handleChange={this.handleChange}
        openDropdown={this.openDropdown}
        closeDropdown={this.closeDropdown}
        selectOption={this.selectOption}
      />
    );
  }
}

export default SearchDropdown;
