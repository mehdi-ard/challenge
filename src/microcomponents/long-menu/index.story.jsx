import React from 'react';
import { storiesOf } from '@storybook/react';
import LongMenu from './';

class Menu extends React.Component {
  state = {
    data: [
      { title: 'درخواست حمل', link: 'https://www.google.com/?gws_rd=ssl' },
      { title: 'درخواست سطل', link: '' },
      { title: 'مشخصات مالی', link: '' }
    ]
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <LongMenu data={data} placement="bottomCenter" title="click me" />
      </>
    );
  }
}

storiesOf('LongMenu', module).add('default', () => <Menu />);
