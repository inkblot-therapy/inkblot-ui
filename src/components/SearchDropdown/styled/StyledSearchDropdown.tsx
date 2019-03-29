import * as _ from 'lodash';
import * as React from 'react';
import SearchActive from '../../../svg/SearchActive';
import SearchInactive from '../../../svg/SearchInactive';
import styled from '../../../utils/styled-components';

const Label = styled.p`
  ${({ theme }) => theme.input.text.label}
`;

const Input = styled<{ disabled?: boolean; error?: boolean }, 'input'>('input')`
  ${({ theme }) => theme.input.text.label}
  cursor: ${({ disabled }) => (!disabled ? 'auto' : 'not-allowed')};
  color: ${({ disabled }) => (disabled ? 'rgba(15, 32, 69, 0.25)' : '#0f2045')};
  border: ${({ error }) =>
    error ? 'solid 2px #cf1a1a' : 'solid 2px transparent'};
  margin-bottom: 0;
  max-width: 156px;
  height: 40px;
  padding-left: 10px;
  padding-right: 30px;
  border-radius: 4px;
  background-color: rgba(240, 242, 245, 0.79);
  outline: none;
  ::placeholder {
    color: ${({ disabled }) =>
      disabled ? 'rgba(15, 32, 69, 0.25)' : 'rgba(15, 32, 69, 0.75);'};
    font-weight: normal;
    letter-spacing: normal;
  }
`;

const OptionsContainer = styled<{ open: boolean }, 'div'>('div')`
  min-width: 200px;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  display: ${({ open }) => (open ? 'inline-block' : 'none')};
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(99, 140, 177, 0.2);
  margin-top: 10px;
`;

const Option = styled.div`
  ${({ theme }) => theme.input.text.standard}
  height: 40px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #ecf9f9;
    font-weight: 600;
  }
`;

const NoOptions = styled.div`
  ${({ theme }) => theme.input.text.standard}
  text-align: center;
  padding: 10px 0px;
`;

const Inline = styled<{ error?: boolean }, 'p'>('p')`
  ${({ theme }) => theme.input.text.inline}
  color: ${({ error }) => (error ? '#cf1a1a' : 'rgba(15, 32, 69, 0.75)')}
`;

const SearchContainer = styled<{ value: string }, 'div'>('div')`
  cursor: ${({ value }) => (value === '' ? 'auto' : 'pointer')};
  display: inline-block;
  position: absolute;
  left: 175px;
  top: 11px;
`;

interface StyledSearchDropdownProps {
  open: boolean;
  options: object[];
  value: string;
  label?: string;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  error?: boolean;
  inlineMessage?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: () => void;
  openDropdown: () => void;
  closeDropdown: () => void;
  selectOption: (event: React.MouseEvent<HTMLDivElement>) => void;
}

class StyledSearchDropdown extends React.Component<StyledSearchDropdownProps> {
  public renderOptions(): object[] | JSX.Element {
    const { options, selectOption } = this.props;

    if (options.length === 0) {
      return <NoOptions>No options</NoOptions>;
    }

    return _.map(options, (option: { value: any; label: string }) => (
      <Option id={option.value} key={option.value} onMouseDown={selectOption}>
        <span>{option.label}</span>
      </Option>
    ));
  }

  public renderSearchButton(): JSX.Element {
    const { disabled, handleButtonClick, value } = this.props;

    return value === '' || disabled ? (
      <SearchInactive />
    ) : (
      <SearchActive onClick={handleButtonClick} />
    );
  }

  public render(): JSX.Element {
    const {
      label,
      placeholder,
      name,
      disabled,
      error,
      inlineMessage,
      handleChange,
      open,
      openDropdown,
      closeDropdown,
      value,
    } = this.props;

    return (
      <div style={{ maxWidth: '200px' }} onBlur={closeDropdown}>
        <Label>{label}</Label>
        <div style={{ position: 'relative' }}>
          <Input
            placeholder={placeholder}
            name={name}
            disabled={disabled}
            error={error}
            onChange={handleChange}
            onFocus={openDropdown}
            value={value}
          />
          <SearchContainer value={value}>
            {this.renderSearchButton()}
          </SearchContainer>
        </div>
        <OptionsContainer open={open}>{this.renderOptions()}</OptionsContainer>
        <Inline error={error}>{inlineMessage}</Inline>
      </div>
    );
  }
}

export default StyledSearchDropdown;
