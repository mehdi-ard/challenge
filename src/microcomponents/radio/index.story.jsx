import React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from './';

storiesOf('Radio', module)
  .add('default', () => <Radio>test</Radio>)
  .add('checked', () => <Radio checked>test</Radio>)
  .add('disabled', () => <Radio disabled="true">disabled</Radio>);
