import React from 'react';
import { storiesOf } from '@storybook/react';
import Radios from '.';

class RadiosGP extends React.Component {
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
        <Radios onChange={this.handleChange} data={data} />
      </>
    );
  }
}

storiesOf('Radios', module).add('default', () => <RadiosGP />);
