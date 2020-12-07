import React from 'react';
import { Select as CoreSelect } from 'antd';
import style from './style';

function Select({ data, classes, className, ...props }) {
  return (
    <CoreSelect {...props} className={[classes.select, className].join(' ')}>
      {data !== '' &&
        data.map((item, index) => (
          <CoreSelect.Option value={item.id || item.value} key={index}>
            {String(item.title || item.caption || item.name)}
          </CoreSelect.Option>
        ))}
    </CoreSelect>
  );
}

export default style(Select);
