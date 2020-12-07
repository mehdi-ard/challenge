import style from './provider/style';
import './assets/fonts/font.css';

const styles = (theme) => ({
  '@global': {
    body: {
      fontFamily: theme.typography.fontFamily,
      direction: 'rtl',
      overscrollBehaviorY: 'contain',
      '& ul': {
        listStyle: 'none',
        margin: 0,
        padding: 0,
      },
      '& .ant-notification': {
        marginLeft: 15,
        width: '100%',
      },
      '& .ant-notification-notice-message': {
        fontSize: '13px !important',
      },
      '& .ant-notification-notice': {
        paddingRight: 10,
        paddingBottom: 10,
      },
      '& .ant-notification-notice-closable .ant-notification-notice-message': {
        paddingRight: 30,
      },
      '& .ant-notification-notice-close': {
        right: 'unset',
        left: 15,
        top: 20,
      },
      '& .ant-picker-prev-icon, .ant-picker-super-prev-icon': {
        transform: 'rotate(135deg)',
      },
      '& .ant-picker-next-icon, .ant-picker-super-next-icon': {
        transform: 'rotate(-45deg)',
      },
      '&::-webkit-scrollbar-button': {
        display: 'none',
      },
      '&::-webkit-scrollbar': {
        width: 5,
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: theme.shape.radius5,
        background: '#20bf6b',
      },
      '& .ant-modal-content': {
        backgroundColor: theme.palette.background.default,
        '& button': {
          color: `${theme.palette.text.primary} !important`,
        },
      },
      '& .ant-modal-header': {
        backgroundColor: theme.palette.background.default,
        '& .ant-modal-title': {
          color: `${theme.palette.text.primary} !important`,
        },
      },
      '& .ant-drawer-body': {
        padding: 0,
        background: '#001529',
      },
    },
  },
  wrapper: {
    height: '100%',
    overflow: 'auto',
    padding: '1.5rem',
    '& .ant-spin-nested-loading': {
      height: '100%',
    },
    '& .ant-spin-container': {
      height: '100%',
    },
    '& .ant-spin-container .ant-spin-blur': {
      height: '100%',
    },
    '& .ant-spin-blur': {
      opacity: 1,
      height: '100%',
    },
    '& .ant-spin-nested-loading > div > .ant-spin': {
      maxHeight: 'unset !important',
    },
  },
  app: {
    height: '100vh',
    display: 'flex',
    backgroundColor: theme.palette.background.default,
    '& a': {
      textDecoration: 'none',
      fontFamily: theme.typography.fontFamily,
    },
  },
  loading: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
  },
  content: {
    fontFamily: theme.typography.fontFamily,
  },
});

export default style(styles);
