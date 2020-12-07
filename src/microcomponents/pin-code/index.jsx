import React from 'react';
import CoreReactCodeInput from 'react-code-input';
import style from 'provider/style';

const styles = style(theme => ({
  root: {
    flip: false,
    direction: 'ltr',
    width: '100%',
    textAlign: 'center',
    '& input::-webkit-inner-spin-button': {
      appearance: 'none',
      margin: 0
    },
    '& input::-webkit-outer-spin-button': {
      appearance: 'none',
      margin: 0
    },
    '& input': {
      outline: 'none',
      width: 56,
      border: 'none',
      borderBottom: '1px solid #d4d6d9',
      marginLeft: 8,
      fontSize: 20,
      textAlign: 'center !important',
      background: 'transparent'
    }
  }
}));

/**
 * @description react-code-input
 * @see https://github.com/40818419/react-code-input#readme
 */

function PinCode({
  className,
  classes,
  children,
  fields = 4,
  type = 'number',
  ...props
}) {
  return (
    <CoreReactCodeInput
      type={type}
      fields={fields}
      className={[classes.root, className].join(' ')}
      {...props}
    />
  );
}

export default styles(PinCode);
