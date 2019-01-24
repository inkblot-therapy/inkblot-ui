import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from '../../utils/wInfo';
import SearchDropdown from './SearchDropdown';

const stories = storiesOf('Components/SearchDropdown', module);
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

stories.add(
  'default',
  wInfo()(() => (
    <SearchDropdown
      name={text('name', '')}
      disabled={boolean('disabled', false)}
      error={boolean('error', false)}
      inlineMessage={text('inlineMessage', '')}
      options={options}
    />
  )),
);
