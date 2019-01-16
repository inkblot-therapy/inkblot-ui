import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from '../../utils/wInfo';
import TextInput from './TextInput';

const stories = storiesOf('Components/TextInput', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  wInfo()(() => <TextInput label="hello">{text('Label', 'Default')}</TextInput>),
);
