import * as React from 'react';

import themed from '../../utils/themed';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('should render correctly', () => {
    const component = themed(<TextInput>Test</TextInput>).toJSON();

    expect(component).toMatchSnapshot();
  });
});
