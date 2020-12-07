import React from 'react';
import renderer from 'react-test-renderer';
import Radios from '.';

class RadiosGroup extends React.Component {
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
        <Radios data={data} />
      </>
    );
  }
}

it('renders default', () => {
  expect(renderer.create(<RadiosGroup />).toJSON()).toMatchSnapshot();
});
