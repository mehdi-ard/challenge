import React from 'react';
import { Carousel as CoreCarousel } from 'antd';

function Carousel({ data, ...props }) {
  return (
    <CoreCarousel {...props}>
      {data !== '' &&
        data.map((item, index) => (
          <a href={item.link} key={index}>
            <img src={item.image} alt="" />
          </a>
        ))}
    </CoreCarousel>
  );
}

export default Carousel;
