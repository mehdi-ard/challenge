import React from 'react';
import style from './style';

function Skeleton({ active, style, classes, ...props }) {
  return (
    <div className={[classes.innerSkeleton, style].join(' ')} {...props}></div>
  );
}

export default style(Skeleton);
