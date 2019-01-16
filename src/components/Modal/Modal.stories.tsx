import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from '../../utils/wInfo';
import Modal from './Modal';

const stories = storiesOf('Components/Modal', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  wInfo()(() => (
    <Modal open={boolean('open', false)}>
      <p>{text('Label', 'Default')}</p>
    </Modal>
  )),
);
