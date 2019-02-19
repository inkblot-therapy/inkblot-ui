import * as React from 'react';
import * as _ from 'lodash';
import { CheckboxProps } from '../Checkbox';
import IconButton from '../../IconButton';
import Check from '../../../svg/Check';
import CheckOutline from '../../../svg/CheckOutline';
import styled from '../../../utils/styled-components';

const box = {
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
};
const Checkbox = styled<
{ disabled?: boolean; error?: boolean; },
'input'
>('input')`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
`;

const Label = styled.label`
  color: #2e5fca;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.2px;
  text-align: left;
  margin-left: 10px;
  width: 460px;
  display: block;
`;

export interface CheckboxState {
  value?: string;
  checked: boolean;
}

class StyledCheckbox extends React.Component<CheckboxProps, CheckboxState> {
  constructor(props: CheckboxProps) {
    super(props);

    this.state = {
      value: this.props.checked ? 'on' : 'off',
      checked: this.props.checked ? true : false,
    };
  }

  public handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    this.setState({
      checked: checked,
      value: (checked ? 'on' : 'off'),
    });
    if (this.props.onChange) {
      this.props.onChange(event.target.checked);
    }
  }

  public render() {
    const {
      className,
      label,
      disabled,
      name,
    } = this.props;
    return (
      <div className={className}>
        <IconButton rounded={false} disabled={disabled} style={box}>
          {this.state.checked ? <Check /> : <CheckOutline /> }
          <Checkbox
            name={name}
            checked={this.state.checked}
            value={this.state.value}
            onChange={!disabled ? this.handleChange : () => undefined}
            type="checkbox"
          />
          <Label>{label}</Label>
        </IconButton>
      </div>
    );
  }
}

export default StyledCheckbox;
