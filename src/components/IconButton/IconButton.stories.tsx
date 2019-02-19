import { action } from '@storybook/addon-actions';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from '../../utils/wInfo';
import IconButton from './IconButton';
import X from "../../svg/X";

const stories = storiesOf('Components/IconButton', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  wInfo()(() => (
    <IconButton
      primary={boolean('Primary', false)}
      secondary={boolean('Secondary', false)}
      tertiary={boolean('Tertiary', true)}
      disabled={boolean('Disabled', false)}
      rounded={boolean('Rounded', true)}
      singleClick={boolean('Single Click', true)}
      onClick={action('clicked')}
    >
      <X />
    </IconButton>
  )),
);

stories.add(
  'primary',
  wInfo()(() => (
    <IconButton
      primary={boolean('Primary', true)}
      secondary={boolean('Secondary', false)}
      tertiary={boolean('Tertiary', false)}
      disabled={boolean('Disabled', false)}
      rounded={boolean('Rounded', true)}
      singleClick={boolean('Single Click', true)}
      onClick={action('clicked')}
    >
      <X />
    </IconButton>
  )),
);

stories.add(
  'secondary',
  wInfo()(() => (
    <IconButton
      primary={boolean('Primary', false)}
      secondary={boolean('Secondary', true)}
      tertiary={boolean('Tertiary', false)}
      disabled={boolean('Disabled', false)}
      rounded={boolean('Rounded', true)}
      singleClick={boolean('Single Click', true)}
      onClick={action('clicked')}
    >
      <X />
    </IconButton>
  )),
);

stories.add(
  'disabled',
  wInfo()(() => (
    <IconButton
      primary={boolean('Primary', false)}
      secondary={boolean('Secondary', false)}
      tertiary={boolean('Tertiary', false)}
      disabled={boolean('Disabled', true)}
      rounded={boolean('Rounded', true)}
      singleClick={boolean('Single Click', true)}
      onClick={action('clicked')}
    >
      <X />
    </IconButton>
  )),
);

stories.add(
  'squared',
  wInfo()(() => (
    <IconButton
      primary={boolean('Primary', true)}
      secondary={boolean('Secondary', false)}
      tertiary={boolean('Tertiary', false)}
      disabled={boolean('Disabled', false)}
      rounded={boolean('Rounded', false)}
      singleClick={boolean('Single Click', true)}
      onClick={action('clicked')}
    >
      <X />
    </IconButton>
  )),
);
