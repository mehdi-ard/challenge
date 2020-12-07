import React from 'react';
import { storiesOf } from '@storybook/react';
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

storiesOf('Carousel', module)
  .add('default', () => <AppCarousel />)
  .add('autoplay', () => <AppCarousel autoplay />)
  .add('effect', () => <AppCarousel autoplay effect="fade" />)
  .add('dotPosition', () => <AppCarousel dotPosition="left" />);
