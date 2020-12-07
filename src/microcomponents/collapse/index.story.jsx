import React from 'react';
import { storiesOf } from '@storybook/react';
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
    return (
      <>
        <Collapse data={data} {...this.props} />
      </>
    );
  }
}

storiesOf('Collapse', module)
  .add('default', () => <AppCollapse />)
  .add('bordered', () => <AppCollapse bordered={false} />)
  .add('expandIconPosition', () => <AppCollapse expandIconPosition="right" />)
  .add('accordion', () => <AppCollapse accordion />);
