import React from 'react';
import { Radio as CoreRadio } from 'antd';
import Radio from 'microcomponents/radio';

function Radios({ data, ...props }) {
  const radioStyle = {
    display: 'block',
    lineHeight: '30px',
  };
  return (
    <CoreRadio.Group {...props}>
      {data !== '' &&
        data.map((item, index) => (
          <Radio key={index} value={item.value || item.id} style={radioStyle}>
            {item.title}
          </Radio>
        ))}
    </CoreRadio.Group>
  );
}

export default Radios;
