import React from 'react';
import renderer from 'react-test-renderer';
import Rate from '.';

it('renders default', () => {
  expect(renderer.create(<Rate />).toJSON()).toMatchSnapshot();
});
it('renders allowHalf', () => {
  expect(
    renderer.create(<Rate allowHalf defaultValue={2.5} />).toJSON()
  ).toMatchSnapshot();
});

it('renders defaultValue', () => {
  expect(renderer.create(<Rate defaultValue={3} />).toJSON()).toMatchSnapshot();
});

it('renders allowClear', () => {
  expect(
    renderer.create(<Rate allowClear={true} defaultValue={3} />).toJSON()
  ).toMatchSnapshot();
});
