import React from 'react';
import { Checkbox as CoreCheckbox } from 'antd';

/**
 * @description Checkbox
 * @see https://ant.design/components/checkbox/#API
 */

function Checkbox({ children, ...props }) {
  return <CoreCheckbox {...props}>{children}</CoreCheckbox>;
}

export default Checkbox;
