import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from './';
import Button from 'microcomponents/button';

storiesOf('Tooltip', module)
  .add('default', () => (
    <Tooltip title="Tooltip">
      <Button>Tooltip</Button>
    </Tooltip>
  ))
  .add('placement', () => (
    <Tooltip placement="top" title="Tooltip">
      <Button>Tooltip</Button>
    </Tooltip>
  ))
  .add('arrowPointAtCenter', () => (
    <Tooltip placement="top" arrowPointAtCenter={true} title="Tooltip">
      <Button>Tooltip</Button>
    </Tooltip>
  ));
