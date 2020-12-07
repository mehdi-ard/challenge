import React from 'react';
import { Switch as CoreSwitch } from 'antd';
import Typography from 'microcomponents/typography';

function Switch({ title, ...props }) {
  return (
    <>
      <Typography variant="text">{title}</Typography>
      <CoreSwitch {...props} />
    </>
  );
}

export default Switch;
