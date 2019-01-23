import * as _ from 'lodash';
import * as React from 'react';
import Down from '../../../svg/Down';
import X from '../../../svg/X';
import styled from '../../../utils/styled-components';

const DropdownContainer = styled.div`
  min-width: 200px;
  display: inline-block;
  max-width: 300px;
  outline: none;
`;

const Dropdown = styled<{ error?: boolean }, 'div'>('div')`
  min-width: 180px;
  min-height: 40px;
  display: inline-flex;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  border-radius: 4px;
  background-color: #fafafa;
  cursor: pointer;
  border: ${({ error }) =>
    error ? 'solid 2px #cf1a1a' : 'solid 2px transparent'};
`;

const Label = styled.p`
  ${({ theme }) => theme.input.text.label}
`;

const Placeholder = styled.div`
  ${({ theme }) => theme.input.text.standard}
`;

const OptionsContainer = styled<{ open: boolean }, 'div'>('div')`
  min-width: 200px;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  display: ${({ open }) => (open ? 'block' : 'none')};
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

const SelectedOption = styled.div`
  ${({ theme }) => theme.input.text.selectedOption}
  display: inline-flex;
  align-items: center;
  height: 30px;
  border-radius: 15px;
  box-shadow: 0 0 10px 0 rgba(99, 140, 177, 0.2);
  background-color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
  margin-top: 5px;
  cursor: auto;
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

interface StyledDropdownProps {
  label?: string;
  placeholder?: string;
  open: boolean;
  options: object[];
  selected: object[];
  inlineMessage?: string;
  error?: boolean;
  openDropdown: () => void;
  closeDropdown: () => void;
  selectOption: (event: React.SyntheticEvent) => void;
  deselectOption: (event: React.SyntheticEvent) => void;
}

class StyledDropdown extends React.Component<StyledDropdownProps> {
  public renderSelectedOptions(): object[] | JSX.Element {
    const { placeholder, selected, deselectOption } = this.props;

    if (selected.length === 0) {
      return <span>{placeholder}</span>;
    }

    return _.map(selected, (option: { value: any; label: string }) => (
      <SelectedOption
        key={option.value}
        onClick={(event) => event.stopPropagation()}
      >
        <span>{option.label}</span>
        <div style={{ marginLeft: '10px', cursor: 'pointer' }}>
          <X id={option.value} onClick={deselectOption} />
        </div>
      </SelectedOption>
    ));
  }

  public renderOptions(): object[] | JSX.Element {
    const { options, selectOption } = this.props;

    if (options.length === 0) {
      return <NoOptions>No options</NoOptions>;
    }

    return _.map(options, (option: { value: any; label: string }) => (
      <Option id={option.value} key={option.value} onClick={selectOption}>
        <span>{option.label}</span>
      </Option>
    ));
  }

  public render(): JSX.Element {
    const {
      open,
      openDropdown,
      closeDropdown,
      label,
      inlineMessage,
      error,
    } = this.props;

    return (
      <div>
        <Label>{label}</Label>
        <DropdownContainer
          id="dropdown-container"
          tabIndex={0}
          onBlur={closeDropdown}
        >
          <Dropdown error={error} onClick={open ? closeDropdown : openDropdown}>
            <Placeholder>{this.renderSelectedOptions()}</Placeholder>
            <div style={{ marginLeft: 'auto' }}>
              <Down />
            </div>
          </Dropdown>
          <OptionsContainer open={open}>
            {this.renderOptions()}
          </OptionsContainer>
        </DropdownContainer>
        <Inline error={error}>{inlineMessage}</Inline>
      </div>
    );
  }
}

export default StyledDropdown;
