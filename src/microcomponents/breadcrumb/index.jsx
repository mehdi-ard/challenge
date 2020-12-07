import React from 'react';
import { Breadcrumb as CoreBreadcrumb } from 'antd';

function Breadcrumb({ data }) {
  return (
    <CoreBreadcrumb>
      <CoreBreadcrumb.Item>Home</CoreBreadcrumb.Item>
      {data.map((item, index) => (
        <CoreBreadcrumb.Item key={index}>
          <a href={item.link}>{item.name}</a>
        </CoreBreadcrumb.Item>
      ))}
    </CoreBreadcrumb>
  );
}

export default Breadcrumb;
