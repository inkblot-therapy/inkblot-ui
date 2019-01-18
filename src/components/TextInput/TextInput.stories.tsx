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
      type={text('type', 'text')}
    />
  )),
);

stories.add(
  'withStyles',
  wInfo()(() => (
    <TextInput
      label={text('Label', 'I got Styles')}
      placeholder={text('value', 'Placeholder')}
      labelStyle={{ color: 'red' }}
      inputStyle={{ backgroundColor: '#dab420' }}
    />
  )),
);

const onChange = (v: object) => {
  console.log(
    `%c ${v.target.value} `,
    'font-weight: bold; font-size: 50px; color: #dab420;',
  );
};

stories.add(
  'optional callback ',
  wInfo()(() => (
    <TextInput label={text('Label', 'Check Console')} onChange={onChange} />
  )),
);
