import React from 'react';
import { Collapse as CoreCollapse } from 'antd';

const { Panel } = CoreCollapse;

function Collapse({ data, ...props }) {
  return (
    <CoreCollapse {...props}>
      {data.map((item, index) => (
        <Panel header={item.title} key={index} showArrow={item.arrow}>
          <p>{item.text}</p>
        </Panel>
      ))}
    </CoreCollapse>
  );
}

export default Collapse;
