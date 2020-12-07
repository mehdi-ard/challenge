import React from 'react';
import { Card as CoreCard } from 'antd';

function Card({ children, ...props }) {
  return <CoreCard {...props}>{children}</CoreCard>;
}

export default Card;
