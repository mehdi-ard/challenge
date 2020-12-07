import React from 'react';
import renderer from 'react-test-renderer';
import Carousel from '.';
import './style.css';

class AppCarousel extends React.Component {
  state = {
    data: [
      {
        title: 'A',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe cum illum commodi autem quo non aliquid reprehenderit, odit perferendis impedit explicabo nemo? Pariatur sed iusto exercitationem qui ab fuga atque.'
      },
      {
        title: 'B',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe cum illum commodi autem quo non aliquid reprehenderit, odit perferendis impedit explicabo nemo? Pariatur sed iusto exercitationem qui ab fuga atque.'
      },
      {
        title: 'C',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe cum illum commodi autem quo non aliquid reprehenderit, odit perferendis impedit explicabo nemo? Pariatur sed iusto exercitationem qui ab fuga atque.'
      }
    ]
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <Carousel data={data} {...this.props} />
      </>
    );
  }
}

it('renders default', () => {
  expect(renderer.create(<AppCarousel />).toJSON()).toMatchSnapshot();
});

it('renders autoplay', () => {
  expect(renderer.create(<AppCarousel autoplay />).toJSON()).toMatchSnapshot();
});

it('renders effect', () => {
  expect(
    renderer.create(<AppCarousel autoplay effect="fade" />).toJSON()
  ).toMatchSnapshot();
});

it('renders dotPosition', () => {
  expect(
    renderer.create(<AppCarousel dotPosition="left" />).toJSON()
  ).toMatchSnapshot();
});
