import * as React from 'react';
import StyledSearch from './styled/StyledSearch';

interface SearchProps {
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

interface SearchState {
  value: string;
}

class Search extends React.Component<SearchProps, SearchState> {
  public render() {
    const { name, disabled, error, inlineMessage } = this.props;

    return (
      <StyledSearch
        name={name}
        disabled={disabled}
        error={error}
        inlineMessage={inlineMessage}
        label="Search"
        placeholder="Search"
      />
    );
  }
}

export default Search;
