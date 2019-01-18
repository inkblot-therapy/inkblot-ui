import * as _ from 'lodash';
import * as React from 'react';
import styled from '../../../utils/styled-components';

const Dropdown = styled.div`
  min-width: 180px;
  height: 40px;
  display: inline-flex;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  border-radius: 4px;
  background-color: #fafafa;
  cursor: pointer;
`;

const Label = styled.div`
  ${({ theme }) => theme.input.text.standard}
`;

const OptionsContainer = styled<{ open: boolean }, 'div'>('div')`
  min-width: 200px;
  display: ${({ open }) => (open ? 'table' : 'none')};
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(99, 140, 177, 0.2);
  margin-top: 10px;
  outline: none;
`;

const Option = styled.div`
  ${({ theme }) => theme.input.text.standard}
  height: 40px;
  padding-left: 10px;
  display: flex;
  align-items: center;
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
  padding-right: 20px;
  margin-right: 10px;
`;

const NoOptions = styled.div`
  ${({ theme }) => theme.input.text.standard}
  text-align: center;
  padding: 10px 0px;
`;

interface StyledDropdownProps {
  label: string;
  open: boolean;
  openDropdown: () => void;
  closeDropdown: () => void;
  options: object[];
  selectOption: (event: React.SyntheticEvent) => void;
  selected: object[];
  deselectOption: (event: React.SyntheticEvent) => void;
}

class StyledDropdown extends React.Component<StyledDropdownProps> {
  public renderSelectedOptions(): object[] | JSX.Element {
    const { label, selected, deselectOption } = this.props;

    if (selected.length === 0) {
      return <span>{label}</span>;
    }

    return _.map(selected, ({ value, label }) => (
      <SelectedOption id={value} key={value} onClick={deselectOption}>
        <span>{label}</span>
      </SelectedOption>
    ));
  }

  public renderOptions(): object[] | JSX.Element {
    const { options, selectOption } = this.props;

    if (options.length === 0) {
      return <NoOptions>No options</NoOptions>;
    }

    return _.map(options, ({ value, label }) => (
      <Option id={value} key={value} onClick={selectOption}>
        <span>{label}</span>
      </Option>
    ));
  }

  public render(): JSX.Element {
    const { open, openDropdown, closeDropdown } = this.props;

    return (
      <div>
        <Dropdown onClick={openDropdown}>
          <Label>{this.renderSelectedOptions()}</Label>
        </Dropdown>
        <OptionsContainer
          id="dropdown-container"
          open={open}
          onBlur={closeDropdown}
          tabIndex={0}
        >
          {this.renderOptions()}
        </OptionsContainer>
      </div>
    );
  }
}

export default StyledDropdown;
