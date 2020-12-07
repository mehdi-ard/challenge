import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './';

storiesOf('Input', module)
  .add('default', () => <Input size="large" placeholder="large size" />)
  .add('allowClear', () => (
    <Input size="large" placeholder="large size" allowClear />
  ))
  .add('password', () => (
    <Input type="password" size="large" placeholder="Password" />
  ))
  .add('textarea', () => (
    <Input type="textarea" size="large" placeholder="Text Area" />
  ))
  .add('search', () => (
    <Input type="search" size="large" placeholder="search" loading />
  ));
