import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './';

storiesOf('Button', module)
  .add('default', () => <Button>Hello Button</Button>)
  .add('primary', () => <Button type="primary">primary</Button>)
  .add('dashed', () => <Button type="dashed">dashed</Button>)
  .add('danger', () => <Button type="danger">danger</Button>)
  .add('shape', () => (
    <Button type="primary" shape="circle">
      A
    </Button>
  ))
  .add('icon', () => <Button shape="circle" icon="search"></Button>)
  .add('icon Text', () => <Button icon="search">Search</Button>)

  .add('onClick', () => (
    <Button onClick={action('button-click')}>Hello Button</Button>
  ));
