import * as _ from 'lodash';
import * as React from 'react';
import StyledSearchDropdown from './styled/StyledSearchDropdown';

/* TODO: Add in SVG
         onClick
*/

interface SearchDropdownProps {
  /** Options in the dropdown */
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
  /** Control the current input value */
  value?: string;
  /** Handler function when input changes */
  onChange?: (value: string) => void;
}

interface SearchDropdownState {
  filteredOptions: object[];
  formValue: string;
  open: boolean;
  value: string;
}

class SearchDropdown extends React.Component<
  SearchDropdownProps,
  SearchDropdownState
> {
  constructor(props: SearchDropdownProps) {
    super(props);
    this.state = {
      filteredOptions: this.filterOptions(props.value || '', props.options),
      formValue: '',
      open: false,
      value: props.value || '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  public componentDidUpdate(
    prevProps: SearchDropdownProps,
    prevState: SearchDropdownState,
  ): void {
    if (this.state.value !== prevState.value) {
      const { value } = this.state;
      const { options } = this.props;
      const filteredOptions = this.filterOptions(value, options);

      this.setState({
        filteredOptions,
      });
    }
    if (this.props.value !== prevProps.value) {
      this.setState({
        value: this.props.value || '',
      });
    }
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = event.target;
    this.setState({
      value,
    });

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  public openDropdown(): void {
    this.setState({
      open: true,
    });
  }

  public closeDropdown(): void {
    const { options } = this.props;
    const { formValue, value } = this.state;
    const currentOption = _.find(
      options,
      (option: { label: string }) => option.label === value,
    );
    const previousOption = _.find(
      options,
      (option: { value: any }) => option.value.toString() === formValue,
    );

    this.setState({
      open: false,
      value: currentOption
        ? currentOption.label
        : previousOption
        ? previousOption.label
        : this.state.value,
    });
  }

  public selectOption(event: React.MouseEvent<HTMLDivElement>): void {
    const { id, innerText } = event.currentTarget;
    const value = innerText.replace(/\n/, '');

    this.setState({
      formValue: id,
      open: false,
      value,
    });

    if (this.props.onChange) {
      this.props.onChange(innerText);
    }
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
    const { open, value, filteredOptions, formValue } = this.state;

    return (
      <div>
        <input
          style={{ display: 'none' }}
          name={name}
          value={formValue}
          readOnly={true}
        />
        <StyledSearchDropdown
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
      </div>
    );
  }

  // Filter the options based on the query
  private filterOptions(query: string, options: object[]): object[] {
    return query === ''
      ? options
      : _.filter(options, (option: { label: string }) => {
          const lowerCaseOption = option.label.toLowerCase();
          const lowerCaseValue = query.toLowerCase();
          return lowerCaseOption.includes(lowerCaseValue);
        });
  }
}

export default SearchDropdown;
