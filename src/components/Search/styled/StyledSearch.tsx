import * as React from 'react';
import styled from '../../../utils/styled-components';

const Label = styled.p`
  ${({ theme }) => theme.input.text.label}
`;

const Input = styled.input`
  ${({ theme }) => theme.input.text.label}
  margin-bottom: 0;
  min-width: 200px;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  background-color: #fafafa;
  border: solid 2px transparent;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px 0 rgba(99, 140, 177, 0.2);
    background-color: #ffffff;
  }
  ::placeholder {
    color: rgba(15, 32, 69, 0.75);
    font-weight: normal;
    letter-spacing: normal;
  }
`;

interface StyledSearchProps {
  label: string;
  placeholder: string;
}

class StyledSearch extends React.Component<StyledSearchProps> {
  public render(): JSX.Element {
    const { label, placeholder } = this.props;

    return (
      <div>
        <Label>{label}</Label>
        <Input placeholder={placeholder} />
      </div>
    );
  }
}

export default StyledSearch;
