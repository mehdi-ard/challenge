import React from 'react';
import { storiesOf } from '@storybook/react';
import { UserOutlined } from '@ant-design/icons';
import Avatar from './';

storiesOf('Avatar', module)
  .add('src', () => (
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
  ))
  .add('size', () => (
    <Avatar
      size={64}
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    />
  ))
  .add('icon', () => <Avatar size={64} icon={<UserOutlined />} />)
  .add('shape square', () => (
    <Avatar
      size="large"
      shape="square"
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    />
  ));
