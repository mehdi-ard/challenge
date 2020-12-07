import React from 'react';
import { Button as CoreButton } from 'antd';
import 'antd/dist/antd.css';
import style from './style';

/**
 * @description Button
 * @see https://ant.design/components/button/#API
 */

function Button({ className, classes, ...props }) {
  return (
    <CoreButton className={[classes.button, className].join(' ')} {...props}>
      {props.children}
    </CoreButton>
  );
}

export default style(Button);
