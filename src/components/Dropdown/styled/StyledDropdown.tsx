import * as _ from 'lodash';
import * as React from 'react';
import Down from '../../../svg/Down';
import styled from '../../../utils/styled-components';

const Dropdown = styled<{ error?: boolean }, 'div'>('div')`
  background-color: #fafafa;
  max-width: 220px;
  height: 40px;
  overflow: hidden;
  border-radius: 4px;
  border: ${({ error }) =>
    error ? 'solid 2px #cf1a1a' : 'solid 2px transparent'};
  position: relative;

  select {
    ${({ theme }) => theme.input.text.standard}
    background: transparent;
    width: 240px;
    height: 40px;
    outline: none;
    border: none;
  }

  svg {
    pointer-events: none;
    position: absolute;
    right: 5px;
    top: 15px;
  }
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
  children: React.ReactNode;
  options: object[];
  name?: string;
  label?: string;
  inlineMessage?: string;
  error?: boolean;
  input?: object;
}

class StyledDropdown extends React.Component<StyledDropdownProps> {
  public render(): JSX.Element {
    const { label, inlineMessage, error, children, name, input } = this.props;

    return (
      <div>
        <Label>{label}</Label>
        <Dropdown error={error}>
          <select name={name} {...input}>
            {children}
          </select>
          <Down />
        </Dropdown>
        <Inline error={error}>{inlineMessage}</Inline>
      </div>
    );
  }
}

export default StyledDropdown;
