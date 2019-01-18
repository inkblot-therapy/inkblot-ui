import * as React from 'react';
import StyledDropdownItem from './styled/StyledDropdownItem';

interface DropdownItemProps {
  children: React.ReactNode;
}

const DropdownItem: React.SFC<DropdownItemProps> = ({ children }) => (
  <StyledDropdownItem>{children}</StyledDropdownItem>
);

export default DropdownItem;
