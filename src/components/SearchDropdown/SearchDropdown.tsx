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
  filteredOptions: object[];
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
      filteredOptions: props.options,
      open: false,
      selected: {},
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  public componentDidUpdate({}, prevState: SearchDropdownState): void {
    if (this.state.value !== prevState.value) {
      const { value } = this.state;
      const { options } = this.props;
      const filteredOptions =
        value === ''
          ? options
          : _.filter(options, (option: { label: string }) => {
              const lowerCaseOption = option.label.toLowerCase();
              const lowerCaseValue = value.toLowerCase();
              return lowerCaseOption.includes(lowerCaseValue);
            });
      this.setState({
        filteredOptions,
      });
    }
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
      label,
      placeholder,
    } = this.props;
    const { open, value, filteredOptions } = this.state;

    return (
      <StyledSearchDropdown
        name={name}
        disabled={disabled}
        error={error}
        inlineMessage={inlineMessage}
        open={open}
        options={filteredOptions}
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
