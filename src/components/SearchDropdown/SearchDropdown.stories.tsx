import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from '../../utils/wInfo';
import SearchDropdown from './SearchDropdown';

const stories = storiesOf('Components/SearchDropdown', module);
stories.addDecorator(withKnobs);

const options = [
  { value: 1, label: 'Toronto' },
  { value: 2, label: 'Montreal' },
  { value: 3, label: 'Calgary' },
  { value: 4, label: 'Winnipeg' },
  { value: 5, label: 'Vancouver' },
];

stories.add(
  'default',
  wInfo()(() => (
    <SearchDropdown
      label={text('label', 'Searchable Dropdown')}
      placeholder={text('placeholder', 'Search')}
      name={text('name', '')}
      disabled={boolean('disabled', false)}
      error={boolean('error', false)}
      inlineMessage={text('inlineMessage', '')}
      options={options}
    />
  )),
);
