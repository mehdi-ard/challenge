import React from 'react';
import renderer from 'react-test-renderer';
import Radio from '.';

it('renders defult', () => {
  expect(renderer.create(<Radio>test</Radio>).toJSON()).toMatchSnapshot();
});

it('renders default checked', () => {
  expect(
    renderer.create(<Radio checked>test</Radio>).toJSON()
  ).toMatchSnapshot();
});

it('renders disabled', () => {
  expect(
    renderer.create(<Radio disabled={true}>disabled</Radio>).toJSON()
  ).toMatchSnapshot();
});
