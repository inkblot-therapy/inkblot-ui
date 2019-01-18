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

const Label = styled.p`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0f2045;
  margin: 0;
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
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0f2045;
  height: 40px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  :hover {
    opacity: 0.9;
    background-color: #ecf9f9;
    font-weight: 600;
  }
  p {
    margin: 0;
  }
`;

interface StyledDropdownProps {
  label: string;
  open: boolean;
  openDropdown: () => void;
  closeDropdown: () => void;
  options: object[];
}

class StyledDropdown extends React.Component<StyledDropdownProps> {
  public renderOptions(): object[] {
    return _.map(this.props.options, ({ label }) => (
      <Option>
        <p>{label}</p>
      </Option>
    ));
  }

  public render(): JSX.Element {
    const { label, open, openDropdown, closeDropdown } = this.props;

    return (
      <div>
        <Dropdown onClick={openDropdown}>
          <Label>{label}</Label>
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
