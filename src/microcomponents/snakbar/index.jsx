import React from 'react';
import { Alert } from 'antd';
import styles from './style';

class Snack extends React.Component {
  render() {
    const { message, visible, type, classes, ...props } = this.props;
    const classType =
      type === 'error'
        ? classes.error
        : type === 'success'
        ? classes.success
        : type === 'warning' || 'warn'
        ? classes.warning
        : type === 'info'
        ? classes.info
        : classes.open;
    return (
      visible && (
        <div className={[classes.snackbar, classType].join(' ')}>
          <Alert
            message={message}
            type={type}
            closable
            showIcon
            banner
            className={classes.alertClass}
            {...props}
          />
        </div>
      )
    );
  }
}

export default styles(Snack);
