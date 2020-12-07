import style from 'provider/style';

const styles = (theme) => ({
  logoDrawer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 15,
    // marginTop: 45,
    '& img': {
      padding: '2rem 0.6rem',
      width: '90%',
      borderBottom: '1.5px solid rgba(255,255,255,0.2)',
    },
    '& a': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  menuDrawer: {
    border: 'none !important',
    marginTop: 30,
    backgroundColor: 'transparent',
    '& li': {
      // paddingTop: '4px !important',
      // paddingBottom: '4px !important',
      // marginTop: '0 !important',
      // marginBottom: '0 !important',
      // height: '48px !important',
      // position: 'relative',
      // '&>::before': {
      //   content: '""',
      //   width: 5,
      //   height: '100%',
      //   borderRadius: 3,
      //   backgroundColor: 'transparent',
      //   position: 'absolute',
      //   top: 0,
      //   right: 0,
      // },
      //   '& .anticon': {
      //     color: '#fff',
      //     fontSize: 18,
      //   },
      //   '& a': {
      //     color: '#fff',
      //   },
      //   '& .ant-menu-submenu-title': {
      //     '& span': {
      //       color: '#fff',
      //     },
      //     '& i': {
      //       color: '#fff',
      //     },
      //   },
      //   '&>:hover': {
      //     backgroundColor: '#1a3248',
      //     '&::after': {
      //       backgroundColor: '#edc73b',
      //     },
      //     '& a': {
      //       color: '#fff',
      //     },
      //   },
      //   '&.ant-menu-item-active': {
      //     backgroundColor: '#1a3248 !important',
      //     '&::after': {
      //       backgroundColor: '#edc73b',
      //     },
      //   },
      //   '&.ant-menu-item-selected': {
      //     backgroundColor: '#1a3248 !important',
      //     '&::after': {
      //       backgroundColor: '#edc73b',
      //       right: 0,
      //       left: 'unset',
      //     },
      //   },
      //   '& .ant-menu': {
      //     backgroundColor: 'rgba(26, 50, 72, 0.4)',
      //     width: 'auto',
      //     marginLeft: 15,
      //     marginRight: 15,
      //   },
    },
  },
  activeMenu: {
    backgroundColor: '#1a3248 !important',
    '&::before': {
      backgroundColor: '#edc73b',
    },
    '&::after': {
      display: 'none',
    },
  },
});

export default style(styles);
