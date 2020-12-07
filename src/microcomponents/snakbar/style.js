import style from 'provider/style';

const styles = (theme) => ({
  snackbar: {
    minWidth: 300,
    position: 'fixed',
    left: 10,
    bottom: 20,
    borderRadius: theme.shape.radius5,
  },
  alertClass: {
    background: 'transparent',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 20px !important',
    '& *': {
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'right',
      color: '#fff',
    },
    '& .ant-alert-message': {
      width: '100%',
      paddingRight: 10,
    },
  },
  error: {
    background: '#f44336',
  },
  success: {
    background: '#4caf50',
  },
  warning: {
    background: '#ff9800',
  },
  info: {
    background: '#2196f3',
  },

  '@media screen and (max-width: 480px)': {
    snackbar: {
      width: '95%',
      left: 0,
      right: 0,
      bottom: 7,
      margin: 'auto',
      borderRadius: 0,
    },
  },
});

export default style(styles);
