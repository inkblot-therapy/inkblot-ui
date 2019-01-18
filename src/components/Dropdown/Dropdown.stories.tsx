import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { wInfo } from '../../utils/wInfo';
import DropdownItem from '../DropdownItem/DropdownItem';
import Dropdown from './Dropdown';

const stories = storiesOf('Components/Dropdown', module);
stories.addDecorator(withKnobs);

stories.add(
  'default',
  wInfo()(() => (
    <Dropdown label={text('Label', 'Default')}>
      <DropdownItem>Option 1</DropdownItem>
      <DropdownItem>Option 2</DropdownItem>
      <DropdownItem>Option 3</DropdownItem>
    </Dropdown>
  )),
);
