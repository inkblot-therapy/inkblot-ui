import * as React from 'react';
import styled from '../../../utils/styled-components';
import { DropdownProps } from '../Dropdown';

const Dropdown = styled.div`
  min-width: 200px;
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

class StyledDropdown extends React.Component<DropdownProps> {
  public render(): JSX.Element {
    return (
      <Dropdown onClick={this.props.toggleDropdown}>
        <Label>{this.props.label}</Label>
        {this.props.children}
      </Dropdown>
    );
  }
}

export default StyledDropdown;
