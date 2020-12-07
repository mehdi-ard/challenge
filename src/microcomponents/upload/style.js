import style from 'provider/style';

const styles = (theme) => ({
  root: {
    width: 450,
    margin: 'auto',
    border: `2px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey[50],
    boxSizing: 'content-box',
    '& .filepond--panel-root': {
      backgroundColor: 'transparent',
    },
    height: 300,
    '& .filepond--drop-label': {
      height: '100% !important',
    },
    '& label': {
      height: '100%',
      width: '100%',
      display: 'flex !important',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

export default style(styles);
