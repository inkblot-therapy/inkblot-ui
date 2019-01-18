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

const DropdownContainer = styled<{ open: boolean }, 'div'>('div')`
  min-width: 200px;
  display: ${({ open }) => (open ? 'table' : 'none')};
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(99, 140, 177, 0.2);
  margin-top: 10px;
  outline: none;
`;

class StyledDropdown extends React.Component<{
  children: React.ReactNode;
  label: string;
  open: boolean;
  openDropdown: () => void;
  closeDropdown: () => void;
}> {
  public render(): JSX.Element {
    return (
      <div>
        <Dropdown onClick={this.props.openDropdown}>
          <Label>{this.props.label}</Label>
        </Dropdown>
        <DropdownContainer
          id="dropdown-container"
          open={this.props.open}
          onBlur={this.props.closeDropdown}
          tabIndex={0}
        >
          {this.props.children}
        </DropdownContainer>
      </div>
    );
  }
}

export default StyledDropdown;
