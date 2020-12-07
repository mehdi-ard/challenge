import React from 'react';
import renderer from 'react-test-renderer';
import Switch from '.';

it('renders default', () => {
  expect(renderer.create(<Switch />).toJSON()).toMatchSnapshot();
});
it('renders with label', () => {
  expect(
    renderer.create(<Switch title="default" />).toJSON()
  ).toMatchSnapshot();
});

it('renders size', () => {
  expect(
    renderer.create(<Switch size="small" title="default" />).toJSON()
  ).toMatchSnapshot();
});

it('renders with text', () => {
  expect(
    renderer
      .create(<Switch checkedChildren="ON" unCheckedChildren="OFF" />)
      .toJSON()
  ).toMatchSnapshot();
});
