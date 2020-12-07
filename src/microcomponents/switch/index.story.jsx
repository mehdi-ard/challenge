import React from 'react';
import { storiesOf } from '@storybook/react';
import Switch from './';

storiesOf('Switch', module)
  .add('default', () => <Switch title="default" />)
  .add('size', () => <Switch size="small" title="default" />)
  .add('text', () => <Switch checkedChildren="ON" unCheckedChildren="OFF" />);
