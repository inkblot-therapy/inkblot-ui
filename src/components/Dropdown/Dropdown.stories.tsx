import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from '../../utils/wInfo';
import Dropdown from './Dropdown';

const stories = storiesOf('Components/Dropdown', module);
stories.addDecorator(withKnobs);

const options = [
  { value: 1, label: 'Option' },
  { value: 2, label: 'Option' },
  { value: 3, label: 'Option' },
];

stories.add(
  'default',
  wInfo()(() => <Dropdown label={text('Label', 'Text')} options={options} />),
);
