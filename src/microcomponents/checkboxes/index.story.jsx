import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkboxs from '.';

class Checkboxes extends React.Component {
  state = {
    data: [
      { title: 'A', id: 1 },
      { title: 'B', id: 2 },
      { title: 'C', id: 3 }
    ]
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <Checkboxs onChange={this.handleChange} data={data} />
      </>
    );
  }
}

storiesOf('Checkboxes', module).add('default', () => <Checkboxes />);
