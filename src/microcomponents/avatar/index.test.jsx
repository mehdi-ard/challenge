import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from '.';

it('renders default', () => {
  expect(
    renderer
      .create(
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      )
      .toJSON()
  ).toMatchSnapshot();
});
it('renders size', () => {
  expect(
    renderer
      .create(
        <Avatar
          size={64}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      )
      .toJSON()
  ).toMatchSnapshot();
});

it('renders shape square', () => {
  expect(
    renderer
      .create(
        <Avatar
          size="large"
          shape="square"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      )
      .toJSON()
  ).toMatchSnapshot();
});
