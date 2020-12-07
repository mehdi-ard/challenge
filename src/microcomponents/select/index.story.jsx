import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from '.';

class SelectGP extends React.Component {
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
        <Select onChange={this.handleChange} data={data} {...this.props} />
      </>
    );
  }
}

storiesOf('Select', module)
  .add('default', () => <SelectGP style={{ width: 120 }} />)
  .add('defaultValue', () => (
    <SelectGP style={{ width: 120 }} defaultValue="lucy" />
  ))
  .add('disabled', () => <SelectGP style={{ width: 120 }} disabled />)
  .add('loading', () => <SelectGP style={{ width: 120 }} loading />)
  .add('allowClear', () => <SelectGP style={{ width: 120 }} allowClear />);
