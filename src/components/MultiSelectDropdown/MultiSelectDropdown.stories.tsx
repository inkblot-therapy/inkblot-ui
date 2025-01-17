import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from '../../utils/wInfo';
import MultiSelectDropdown from './MultiSelectDropdown';

const stories = storiesOf('Components/MultiSelectDropdown', module);
stories.addDecorator(withKnobs);

const options = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
  { value: 5, label: 'Option 5' },
  { value: 6, label: 'Option 6' },
  { value: 7, label: 'Option 7' },
];

const defaultValue = [
  { value: 10, label: 'Option 10' },
  { value: 11, label: 'Option 11' },
];

const defaultOptions = [
  { value: 8, label: 'Option 8' },
  { value: 9, label: 'Option 9' },
  { value: 10, label: 'Option 10' },
  { value: 11, label: 'Option 11' },
  { value: 12, label: 'Option 12' },
  { value: 13, label: 'Option 13' },
  { value: 14, label: 'Option 14' },
];

const handleChange = (o: object, a: string) => {
  console.log(a);
  console.log(o);
};

stories.add(
  'No default value given',
  wInfo()(() => (
    <MultiSelectDropdown
      label={text('label', 'MultiSelectDropdown')}
      placeholder={text('placeholder', 'Text')}
      name={text('name', '')}
      options={options}
      inlineMessage={text('inlineMessage', '')}
      error={boolean('error', false)}
    />
  )),
);

stories.add(
  'Default value given',
  wInfo()(() => (
    <MultiSelectDropdown
      label={text('label', 'MultiSelectDropdown')}
      placeholder={text('placeholder', 'Text')}
      name={text('name', '')}
      options={defaultOptions}
      onChange={handleChange}
      value={defaultValue}
    />
  )),
);
