import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from '../../utils/wInfo';
import Button from './Button';

const stories = storiesOf('Components/Button', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  wInfo()(() => (
    <Button
      disabled={boolean('Disabled', false)}
      label="RIP X"
      primary={boolean('Primary', false)}
      secondary={boolean('Secondary', false)}
      tertiary={boolean('Tertiary', true)}
      onClick={action('onClick')}
    />
  )),
);
