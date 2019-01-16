import * as React from 'react';
import styled from '../../../utils/styled-components';

const Input = styled.input`
  min-width: 100px;
  height: 20px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 2px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 8px;
  color: #0f2045;
  border: none;
  background-color: #fafafa;
`;

const Label = styled.label`
  color: red;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.1px;
  color: #0f2045;
  display: block;
  margin-bottom: 10px;
`;

class TextInput extends React.Component<Props> {
  public render() {
    return (
      <div className={this.props.className}>
        <Label>{this.props.label}</Label>
        <Input {...this.props} />
      </div>
    );
  }
}

export default TextInput;
