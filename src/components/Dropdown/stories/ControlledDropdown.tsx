import * as React from 'react';
import Dropdown from '../Dropdown';

const defaultValue = [
  { value: 10, label: 'Option 10' },
  { value: 11, label: 'Option 11' },
];

const options = [
  { value: 8, label: 'Option 8' },
  { value: 9, label: 'Option 9' },
  { value: 10, label: 'Option 10' },
  { value: 11, label: 'Option 11' },
  { value: 12, label: 'Option 12' },
  { value: 13, label: 'Option 13' },
  { value: 14, label: 'Option 14' },
];

class ControlledDropdown extends React.Component<{}, { value: object[] }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: defaultValue,
    };
  }

  public render(): JSX.Element {
    return (
      <Dropdown
        label={'Controlled Dropdown'}
        options={options}
        onChange={this.handleChange}
        value={this.state.value}
      />
    );
  }

  private handleChange(o: object, a: boolean): void {
    console.log(a ? 'remove' : 'add');
    console.log(o);
  }
}

export default ControlledDropdown;
