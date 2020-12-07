import React from 'react';
import { storiesOf } from '@storybook/react';
import Rate from './';

storiesOf('Rate', module)
  .add('default', () => <Rate />)
  .add('allowHalf', () => <Rate allowHalf defaultValue={2.5} />)
  .add('defaultValue', () => <Rate defaultValue={3} />)
  .add('allowClear', () => <Rate allowClear={true} defaultValue={3} />);
