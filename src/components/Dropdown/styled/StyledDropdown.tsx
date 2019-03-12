import * as _ from 'lodash';
import * as React from 'react';
import Select from 'react-select';
import styled from '../../../utils/styled-components';

const Container = styled<{ error?: boolean }, 'div'>('div')`
  border-radius: 4px;
  border: ${({ error }) =>
    error ? '2px solid #cf1a1a' : '2px solid transparent'};
`;

const Label = styled.p`
  ${({ theme }) => theme.input.text.label}
  margin-bottom: 10px;
`;

const Inline = styled<{ error?: boolean }, 'p'>('p')`
  ${({ theme }) => theme.input.text.inline}
  color: ${({ error }) => (error ? '#cf1a1a' : 'rgba(15, 32, 69, 0.75)')}
`;

interface StyledDropdownProps {
  options: object[];
  name?: string;
  label?: string;
  inlineMessage?: string;
  error?: boolean;
  input?: object;
}

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#fafafa',
    border: 'none',
    borderRadius: '4px',
    boxShadow: 'none',
    height: '40px',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#2e5fca',
  }),
  indicatorSeparator: () => ({}),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#ecf9f9' : 'white',
    color: '#0f2045',
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: '16px',
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontWeight: state.isFocused ? '600' : 'normal',
    letterSpacing: '0.1px',
    lineHeight: 'normal',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#0f2045',
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: '16px',
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontWeight: 'normal',
    letterSpacing: 'normal',
    lineHeight: 'normal',
  }),
  valueContainer: (provided) => ({
    ...provided,
    backgroundColor: '#fafafa',
    border: 'none',
    color: '#0f2045',
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: '16px',
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontWeight: 'normal',
    letterSpacing: '0.1px',
    lineHeight: 'normal',
  }),
};

class StyledDropdown extends React.Component<StyledDropdownProps> {
  public render(): JSX.Element {
    const { label, inlineMessage, input, options, name, error } = this.props;

    return (
      <div>
        <Label>{label}</Label>
        <Container error={error}>
          <Select
            onBlurResetsInput={false}
            onSelectResetsInput={false}
            isSearchable={false}
            options={options}
            styles={customStyles}
            name={name}
            {...input}
          />
        </Container>
        <Inline error={error}>{inlineMessage}</Inline>
      </div>
    );
  }
}

export default StyledDropdown;
