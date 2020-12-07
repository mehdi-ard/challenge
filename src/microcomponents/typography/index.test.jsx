import React from 'react';
import renderer from 'react-test-renderer';
import Typography from './';

it('title', () => {
  expect(
    renderer
      .create(
        <Typography variant="title" level={2}>
          Hello Button
        </Typography>
      )
      .toJSON()
  ).toMatchSnapshot();
});

it('text', () => {
  expect(
    renderer
      .create(<Typography variant="text">Hello Button</Typography>)
      .toJSON()
  ).toMatchSnapshot();
});

it('Paragraph', () => {
  expect(
    renderer
      .create(<Typography variant="paragraph">Hello Button</Typography>)
      .toJSON()
  ).toMatchSnapshot();
});

it('Paragraph copyable', () => {
  expect(
    renderer
      .create(
        <Typography variant="paragraph" copyable>
          Hello Button
        </Typography>
      )
      .toJSON()
  ).toMatchSnapshot();
});
