import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from '../../utils/wInfo';
import TextInput from './TextInput';

const stories = storiesOf('Components/TextInput', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  wInfo()(() => (
    <TextInput
      error={boolean('error', false)}
      className={text('className')}
      disabled={boolean('disabled', false)}
      label={text('Label', 'Basic')}
      placeholder={text('value', 'Placeholder')}
    />
  )),
);

stories.add(
  'withStyles',
  wInfo()(() => (
    <TextInput
      error={boolean('error', false)}
      className={text('className')}
      disabled={boolean('disabled', false)}
      label={text('Label', 'I got Styles')}
      placeholder={text('value', 'Placeholder')}
      onChange={(v) => console.log(v.target.value, 'hel')}
      labelStyle={{ color: 'red' }}
      inputStyle={{ backgroundColor: '#dab420' }}
    />
  )),
);
