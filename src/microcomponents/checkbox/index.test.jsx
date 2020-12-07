import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from '.';

it('renders defult', () => {
  expect(renderer.create(<Checkbox>test</Checkbox>).toJSON()).toMatchSnapshot();
});

it('renders default checked', () => {
  expect(
    renderer.create(<Checkbox checked>test</Checkbox>).toJSON()
  ).toMatchSnapshot();
});

it('renders disabled', () => {
  expect(
    renderer.create(<Checkbox disabled={true}>disabled</Checkbox>).toJSON()
  ).toMatchSnapshot();
});
it('renders indeterminate', () => {
  expect(
    renderer
      .create(<Checkbox indeterminate={true}>indeterminate</Checkbox>)
      .toJSON()
  ).toMatchSnapshot();
});
