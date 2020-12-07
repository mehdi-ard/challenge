import style from 'provider/style';

const styles = (theme) => ({
  '@global': {
    '& .ant-input-affix-wrapper': {
      background: 'red',
    },
  },
  input: {
    '&:focus-within': {
      background: '#fff',
      border: '1px solid #c2c5c9',
      boxShadow: 'none !important',
    },
    '& input': {
      backgroundColor: '#fff',
      '&:focus': {
        background: '#fff',
      },
    },
    background: '#fff',
    borderRadius: 2,
    width: '100%',
    height: 48,
    display: 'flex',
    alignItems: 'center',
    '&:focus': {
      background: '#fff',
      border: '1px solid #c2c5c9',
      boxShadow: 'none !important',
    },
  },
});

export default style(styles);
