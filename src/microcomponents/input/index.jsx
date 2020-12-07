import React from 'react';
import { Input as CoreInput, InputNumber } from 'antd';
import style from './style';

function Input({ type, classes, className, ...props }) {
  if (type === 'textarea') {
    return (
      <CoreInput.TextArea
        {...props}
        className={[classes.input, className].join(' ')}
      />
    );
  } else if (type === 'password') {
    return (
      <CoreInput.Password
        {...props}
        className={[classes.input, className].join(' ')}
      />
    );
  } else if (type === 'search') {
    return (
      <CoreInput.Search
        {...props}
        className={[classes.input, className].join(' ')}
      />
    );
  } else if (type === 'number') {
    return (
      <InputNumber
        {...props}
        type="number"
        className={[classes.input, className].join(' ')}
      />
    );
  } else {
    return (
      <CoreInput {...props} className={[classes.input, className].join(' ')} />
    );
  }
}

export default style(Input);
