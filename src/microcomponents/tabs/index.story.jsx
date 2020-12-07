import React from 'react';
import { storiesOf } from '@storybook/react';
import Tabs from '.';

class AppTabs extends React.Component {
  state = {
    data: [
      {
        title: 'A',
        content:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe cum illum commodi autem quo non aliquid reprehenderit, odit perferendis impedit explicabo nemo? Pariatur sed iusto exercitationem qui ab fuga atque.'
      },
      {
        title: 'B',
        content:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe cum illum commodi autem quo non aliquid reprehenderit, odit perferendis impedit explicabo nemo? Pariatur sed iusto exercitationem qui ab fuga atque.'
      },
      {
        title: 'C',
        content:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe cum illum commodi autem quo non aliquid reprehenderit, odit perferendis impedit explicabo nemo? Pariatur sed iusto exercitationem qui ab fuga atque.'
      }
    ]
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <Tabs data={data} {...this.props} />
      </>
    );
  }
}

storiesOf('Tabs', module)
  .add('default', () => <AppTabs />)
  .add('tabPosition', () => <AppTabs tabPosition="left" />)
  .add('type', () => <AppTabs size="card" />)
  .add('size', () => <AppTabs size="small" />);
