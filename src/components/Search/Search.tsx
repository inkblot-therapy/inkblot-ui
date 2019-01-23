import * as React from 'react';
import StyledSearch from './styled/StyledSearch';

interface SearchProps {}

interface SearchState {}

class Search extends React.Component<SearchProps, SearchState> {
  public render() {
    return <StyledSearch label="Search" placeholder="Search" />;
  }
}

export default Search;
