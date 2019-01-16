import * as React from 'react';
import styled from '../../../utils/styled-components';

const Input = styled.input`
  min-width: 100px;
  height: 20px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 2px;
  font-family: SourceSansPro;
  font-size: 8px;
  color: #0f2045;
  border: none;
  background-color: #red;
`;

const Label = styled.label`
  color: red;
`;

class TextInput extends React.Component<> {
  public render() {
    console.log(this.props);
    return (
      <div>
        <Label>{this.props.label}</Label>
        <Input {...this.props}>{this.props.children}</Input>
      </div>
    );
  }
}

export default TextInput;
