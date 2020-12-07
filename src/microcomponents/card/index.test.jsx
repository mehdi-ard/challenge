import React from 'react';
import renderer from 'react-test-renderer';
import Card from '.';

it('renders default', () => {
  expect(
    renderer
      .create(
        <Card title="Default size card" extra={<a href="#">More</a>}>
          <p>test</p>
        </Card>
      )
      .toJSON()
  ).toMatchSnapshot();
});

it('renders hoverable', () => {
  expect(
    renderer
      .create(
        <Card title="Default size card" extra={<a href="#">More</a>}>
          <p>test</p>
        </Card>
      )
      .toJSON()
  ).toMatchSnapshot();
});

it('renders cover', () => {
  expect(
    renderer
      .create(
        <Card title="Default size card" extra={<a href="#">More</a>}>
          <p>test</p>
        </Card>
      )
      .toJSON()
  ).toMatchSnapshot();
});

it('renders bordered', () => {
  expect(
    renderer
      .create(
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <p>test</p>
        </Card>
      )
      .toJSON()
  ).toMatchSnapshot();
});
