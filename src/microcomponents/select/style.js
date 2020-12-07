import style from 'provider/style';

const styles = (theme) => ({
  select: {
    height: 48,
    borderRadius: 5,
    '& .ant-select-selection': {
      height: 48,
      borderRadius: 12,
    },
    '& .ant-select-selector': {
      height: '48px !important',
      borderRadius: '5px !important',
      backgroundColor: '#fff  !important',
      // border: 'none !important',
      '&:focus-within': {
        backgroundColor: '#fff !important',
        border: '1px solid #c2c5c9 !important',
        boxShadow: 'none !important',
      },
      '& .ant-select-selection-item': {
        height: '100% !important',
        display: 'flex',
        alignItems: 'center',
      },
      '& input': {
        height: 48,
      },
    },

    '& .ant-select-arrow': {
      right: 'unset',
      left: 11,
    },
    '& .ant-select-selection__rendered': {
      height: '100%',
    },
    '& .ant-select-selection__placeholder': {
      textAlign: 'right',
    },
    '& .ant-select-selection--single .ant-select-selection__rendered': {
      marginRight: 11,
    },
    '& .ant-select-selection-selected-value': {
      display: 'flex !important',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      paddingRight: 10,
    },
  },
});

export default style(styles);
