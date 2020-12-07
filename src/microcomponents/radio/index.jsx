import React from 'react';
import { Radio as CoreRadio } from 'antd';

/**
 * @description Checkbox
 * @see https://ant.design/components/radio/#API
 */

function Radio({ children, ...props }) {
  return <CoreRadio {...props}>{children}</CoreRadio>;
}

export default Radio;
