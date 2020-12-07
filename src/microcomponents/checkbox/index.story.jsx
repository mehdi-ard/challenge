import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './';

storiesOf('Checkbox', module)
  .add('default', () => <Checkbox>test</Checkbox>)
  .add('checked', () => <Checkbox checked>test</Checkbox>)
  .add('indeterminate', () => (
    <Checkbox indeterminate="true">indeterminate</Checkbox>
  ))
  .add('disabled', () => <Checkbox disabled="true">disabled</Checkbox>);
