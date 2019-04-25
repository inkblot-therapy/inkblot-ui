import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { wInfo } from "../../utils/wInfo";
import Checkbox from "./Checkbox";

const stories = storiesOf("Components/Checkbox", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <Checkbox
      label={text('Label', 'I consent to my medical records being released to my primary care provider')}
      disabled={boolean('Disabled', false)}
      checked={boolean('Checked', false)}
      onChange={action('clicked')}
      name={text('Name', 'consent_yn')}
      value={text('Value', 'off')}
    />
  )),
);

stories.add(
  "checked",
  wInfo()(() => (
    <Checkbox
      label={text('Label', 'I consent to my medical records being released to my primary care provider')}
      disabled={boolean('Disabled', false)}
      checked={boolean('Checked', true)}
      onChange={action('clicked')}
      name={text('Name', 'consent_yn')}
      value={text('Value', 'on')}
    />
  )),
);

stories.add(
  "disabled",
  wInfo()(() => (
    <Checkbox
      label={text('Label', 'I consent to my medical records being released to my primary care provider')}
      disabled={boolean('Disabled', true)}
      checked={boolean('Checked', false)}
      onChange={action('clicked')}
      name={text('Name', 'consent_yn')}
      value={text('Value', 'off')}
    />
  )),
);
