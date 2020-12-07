import React from 'react';
import renderer from 'react-test-renderer';
import Tag from './';

it('renders default', () => {
  expect(renderer.create(<Tag>success</Tag>).toJSON()).toMatchSnapshot();
});

it('renders color success', () => {
  expect(
    renderer.create(<Tag color="success">success</Tag>).toJSON()
  ).toMatchSnapshot();
});

it('renders color processing', () => {
  expect(
    renderer.create(<Tag color="processing">processing</Tag>).toJSON()
  ).toMatchSnapshot();
});

it('renders color error', () => {
  expect(
    renderer.create(<Tag color="error">error</Tag>).toJSON()
  ).toMatchSnapshot();
});

it('color default', () => {
  expect(
    renderer.create(<Tag color="default">default</Tag>).toJSON()
  ).toMatchSnapshot();
});

it('color warning', () => {
  expect(
    renderer.create(<Tag color="warning">warning</Tag>).toJSON()
  ).toMatchSnapshot();
});

it('custom color', () => {
  expect(
    renderer.create(<Tag color="#f50">custom color</Tag>).toJSON()
  ).toMatchSnapshot();
});
