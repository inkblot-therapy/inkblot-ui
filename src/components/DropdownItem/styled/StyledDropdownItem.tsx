import * as React from 'react';
import styled from '../../../utils/styled-components';

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0f2045;
  padding: 0px 10px;
  cursor: pointer;
  :hover {
    background-color: #ecf9f9;
    font-weight: 600;
  }
`;

class StyledDropdownItem extends React.Component<{
  children: React.ReactNode;
}> {
  public render(): JSX.Element {
    return <DropdownItem>{this.props.children}</DropdownItem>;
  }
}

export default StyledDropdownItem;
