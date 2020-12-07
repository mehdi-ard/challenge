import React from 'react';
import renderer from 'react-test-renderer';
import Collapse from '.';

class AppCollapse extends React.Component {
  state = {
    data: [
      {
        title: 'A',
        arrow: true,
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe cum illum commodi autem quo non aliquid reprehenderit, odit perferendis impedit explicabo nemo? Pariatur sed iusto exercitationem qui ab fuga atque.'
      },
      {
        title: 'B',
        arrow: true,
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe cum illum commodi autem quo non aliquid reprehenderit, odit perferendis impedit explicabo nemo? Pariatur sed iusto exercitationem qui ab fuga atque.'
      },
      {
        title: 'C',
        arrow: false,
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe cum illum commodi autem quo non aliquid reprehenderit, odit perferendis impedit explicabo nemo? Pariatur sed iusto exercitationem qui ab fuga atque.'
      }
    ]
  };

  render() {
    const { data } = this.state;
    return <Collapse data={data} {...this.props} />;
  }
}

it('renders default', () => {
  expect(renderer.create(<AppCollapse />).toJSON()).toMatchSnapshot();
});

it('renders bordered', () => {
  expect(
    renderer.create(<AppCollapse bordered={false} />).toJSON()
  ).toMatchSnapshot();
});

it('renders expandIconPosition', () => {
  expect(
    renderer.create(<AppCollapse expandIconPosition="right" />).toJSON()
  ).toMatchSnapshot();
});

it('renders AppCollapse', () => {
  expect(renderer.create(<AppCollapse accordion />).toJSON()).toMatchSnapshot();
});
