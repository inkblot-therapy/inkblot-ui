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
  /** Handler function when input changes */
  onChange?: (option: object, action: string) => void;
  /** Control the current input value */
  value?: object[];
}

interface SearchDropdownState {
  value: string;
}

class SearchDropdown extends React.Component<
  SearchDropdownProps,
  SearchDropdownState
> {
  constructor(props: SearchDropdownProps) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { value } = event.target;
    this.setState({
      value,
    });
  }

  public render(): JSX.Element {
    const { name, disabled, error, inlineMessage, options } = this.props;

    return (
      <StyledSearchDropdown
        name={name}
        disabled={disabled}
        error={error}
        inlineMessage={inlineMessage}
        handleChange={this.handleChange}
        label="Searh"
        placeholder="Searh"
      />
    );
  }
}

export default SearchDropdown;
