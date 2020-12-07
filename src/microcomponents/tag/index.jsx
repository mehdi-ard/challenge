import React from 'react';
import { Tag as CoreTag } from 'antd';
import 'antd/dist/antd.css';

function Tag({ children, ...props }) {
  return <CoreTag {...props}>{children}</CoreTag>;
}

export default Tag;
