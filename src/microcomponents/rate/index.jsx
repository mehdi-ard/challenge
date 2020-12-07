import React from 'react';
import { Rate as CoreRate } from 'antd';

/**
 * @description Button
 * @see https://ant.design/components/rate/#API
 */

function Rate({ ...props }) {
  return <CoreRate {...props} />;
}

export default Rate;
