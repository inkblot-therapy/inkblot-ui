import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from '../../utils/wInfo';
import DynamicModal from './stories/DynamicModal';
import StaticModal from './stories/StaticModal';

const stories = storiesOf('Components/Modal', module);
stories.addDecorator(withKnobs);

stories.add('Close when click outside', wInfo()(() => <DynamicModal />));
stories.add('Stays open', wInfo()(() => <StaticModal />));
