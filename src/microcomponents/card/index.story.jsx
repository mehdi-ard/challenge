import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './';

storiesOf('Card', module)
  .add('default', () => (
    <Card title="Default size card" extra={<a href="#">More</a>}>
      <p>test</p>
    </Card>
  ))
  .add('hoverable', () => (
    <Card title="Default size card" extra={<a href="#">More</a>}>
      <p>test</p>
    </Card>
  ))
  .add('cover', () => (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <p>test</p>
    </Card>
  ))
  .add('bordered', () => (
    <Card title="Default size card" bordered={false}>
      <p>test</p>
    </Card>
  ))
  .add('actions', () => (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <p>test</p>
    </Card>
  ));
