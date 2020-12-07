import React from 'react';
import { Tabs as CoreTab } from 'antd';

const { TabPane } = CoreTab;

function Tabs({ data, ...props }) {
  return (
    <CoreTab {...props}>
      {data.map((item, index) => (
        <TabPane tab={item.title} key={index}>
          {item.content}
        </TabPane>
      ))}
    </CoreTab>
  );
}

export default Tabs;
