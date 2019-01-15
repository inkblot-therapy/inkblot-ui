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
      label={text('Label', 'RIP X, HE WAS A VISONARY')}
      primary={boolean('Primary', false)}
      secondary={boolean('Secondary', false)}
      tertiary={boolean('Tertiary', true)}
      disabled={boolean('Disabled', false)}
      onClick={action('onClick')}
    />
  )),
);

stories.add(
  'primary',
  wInfo()(() => (
    <Button
      label={text('Label', 'RIP X, HE WAS A VISONARY')}
      primary={boolean('Primary', true)}
      secondary={boolean('Secondary', false)}
      tertiary={boolean('Tertiary', false)}
      disabled={boolean('Disabled', false)}
      onClick={action('onClick')}
    />
  )),
);
stories.add(
  'secondary',
  wInfo()(() => (
    <Button
      label={text('Label', 'RIP X, HE WAS A VISONARY')}
      onClick={action('onClick')}
      primary={boolean('Primary', false)}
      secondary={boolean('Secondary', true)}
      tertiary={boolean('Tertiary', false)}
      disabled={boolean('Disabled', false)}
    />
  )),
);
stories.add(
  'disabled',
  wInfo()(() => (
    <Button
      label={text('Label', 'RIP X, HE WAS A VISONARY')}
      onClick={action('onClick')}
      primary={boolean('Primary', false)}
      secondary={boolean('Secondary', false)}
      tertiary={boolean('Tertiary', false)}
      disabled={boolean('Disabled', true)}
    />
  )),
);

stories.add(
  'disabled',
  wInfo()(() => (
    <Button
      onClick={action('onClick')}
      label={text('Label', 'RIP X, HE WAS A VISONARY')}
      primary={boolean('Primary', false)}
      secondary={boolean('Secondary', false)}
      tertiary={boolean('Tertiary', false)}
      disabled={boolean('Disabled', true)}
    />
  )),
);
