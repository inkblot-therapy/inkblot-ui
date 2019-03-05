import * as _ from 'lodash';
import * as React from 'react';
import Down from '../../../svg/Down';
import styled from '../../../utils/styled-components';

const DropdownContainer = styled.div`
  display: inline-block;
  outline: none;
  #dropdown-container {
    width: 100%;
    & > div {
      width: 100%;
    }
  }
`;

const Dropdown = styled<{ error?: boolean }, 'div'>('div')`
  height: 40px;
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

const SelectedText = styled.div`
  ${({ theme }) => theme.input.text.standard}
  padding-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const OptionsContainer = styled<{ open: boolean }, 'div'>('div')`
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
  padding-right: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    white-space: nowrap;
  }
  &:hover {
    opacity: 0.9;
    background-color: #ecf9f9;
    font-weight: 600;
  }
`;

const Inline = styled<{ error?: boolean }, 'p'>('p')`
  ${({ theme }) => theme.input.text.inline}
  color: ${({ error }) => (error ? '#cf1a1a' : 'rgba(15, 32, 69, 0.75)')}
`;

interface StyledDropdownProps {
  label?: string;
  open: boolean;
  options: object[];
  selected: string;
  inlineMessage?: string;
  error?: boolean;
  openDropdown: () => void;
  closeDropdown: () => void;
  selectOption: (event: React.SyntheticEvent) => void;
}

class StyledDropdown extends React.Component<StyledDropdownProps> {
  public renderOptions(): object[] | JSX.Element {
    const { options, selectOption } = this.props;

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
      selected,
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
            <SelectedText>{selected}</SelectedText>
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
