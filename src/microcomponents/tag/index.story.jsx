import React from 'react';
import { storiesOf } from '@storybook/react';
import Tag from './';

storiesOf('Tag', module)
  .add('default', () => <Tag>success</Tag>)
  .add('color success', () => <Tag color="success">success</Tag>)
  .add('color processing', () => <Tag color="processing">processing</Tag>)
  .add('color error', () => <Tag color="error">error</Tag>)
  .add('color default', () => <Tag color="default">default</Tag>)
  .add('color warning', () => <Tag color="warning">warning</Tag>)
  .add('custom color', () => <Tag color="#f50">custom color</Tag>);
