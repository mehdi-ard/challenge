import React from 'react';
import { Tooltip as CoreTooltip } from 'antd';

function Tooltip({ children, ...props }) {
  return <CoreTooltip {...props}>{children}</CoreTooltip>;
}

export default Tooltip;
