import * as React from 'react';

import themed from '../../utils/themed';
import MultiSelectDropdown from './MultiSelectDropdown';

describe('MultiSelectDropdown', () => {
  it('should render correctly', () => {
    const component = themed(
      <MultiSelectDropdown>Test</MultiSelectDropdown>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
