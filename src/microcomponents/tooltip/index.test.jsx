import React from 'react';
import renderer from 'react-test-renderer';
import Tooltip from './';
import Button from 'microcomponents/button';

it('renders default', () => {
  expect(
    renderer
      .create(
        <Tooltip title="Tooltip">
          <Button>Tooltip</Button>
        </Tooltip>
      )
      .toJSON()
  ).toMatchSnapshot();
});
it('renders placement', () => {
  expect(
    renderer
      .create(
        <Tooltip placement="top" title="Tooltip">
          <Button>Tooltip</Button>
        </Tooltip>
      )
      .toJSON()
  ).toMatchSnapshot();
});
