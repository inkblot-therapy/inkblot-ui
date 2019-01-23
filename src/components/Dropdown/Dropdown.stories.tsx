import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from '../../utils/wInfo';
import Dropdown from './Dropdown';

const stories = storiesOf('Components/Dropdown', module);
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

const optionsWithDefault = [
  { value: 8, label: 'Option 8' },
  { value: 9, label: 'Option 9' },
  { value: 10, label: 'Option 10' },
  { value: 11, label: 'Option 11' },
  { value: 12, label: 'Option 12' },
  { value: 13, label: 'Option 13' },
  { value: 14, label: 'Option 14' },
];

const defaultValue = [
  { value: 10, label: 'Option 10' },
  { value: 11, label: 'Option 11' },
];

stories.add(
  'No default value given',
  wInfo()(() => (
    <Dropdown
      label={text('Label', 'Dropdown')}
      placeholder={text('Placeholder', 'Text')}
      name={text('Name', '')}
      options={options}
    />
  )),
);

stories.add(
  'Default value',
  wInfo()(() => (
    <Dropdown
      defaultValue={defaultValue}
      label={text('Label', 'Dropdown')}
      name={text('Name', '')}
      options={optionsWithDefault}
    />
  )),
);
