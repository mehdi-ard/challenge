import React from 'react';
import renderer from 'react-test-renderer';
import Input from '.';

it('renders default', () => {
  expect(
    renderer.create(<Input size="large" placeholder="large size" />).toJSON()
  ).toMatchSnapshot();
});
it('renders allowClear', () => {
  expect(
    renderer.create(<Input size="large" placeholder="large size" />).toJSON()
  ).toMatchSnapshot();
});

it('renders password', () => {
  expect(
    renderer
      .create(<Input type="password" size="large" placeholder="Password" />)
      .toJSON()
  ).toMatchSnapshot();
});

it('renders text area', () => {
  expect(
    renderer
      .create(<Input type="textarea" size="large" placeholder="Text Area" />)
      .toJSON()
  ).toMatchSnapshot();
});
it('renders search', () => {
  expect(
    renderer
      .create(<Input type="search" size="large" placeholder="search" loading />)
      .toJSON()
  ).toMatchSnapshot();
});
