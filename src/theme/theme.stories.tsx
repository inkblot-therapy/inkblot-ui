import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Color from './Color';
import theme from './index';

const stories = storiesOf('Themes/Colors', module);

const buttonBackgroundColors = Object.keys(theme.button.backgroundColor).map(
  (key) => <Color name={key} color={theme.button.backgroundColor[key]} />,
);

const buttonTextColors = Object.keys(theme.button.textColor).map((key) => (
  <Color name={key} color={theme.button.textColor[key]} />
));

stories.add('button.backgroundColor', () => (
  <React.Fragment>{buttonBackgroundColors}</React.Fragment>
));

stories.add('button.textColor', () => (
  <React.Fragment>{buttonTextColors}</React.Fragment>
));
