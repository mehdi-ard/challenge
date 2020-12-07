import style from 'provider/style';

const styles = (theme) => ({
  post: {
    width: '100%',
    padding: 15,
    background: '#fff',
    borderRadius: 5,
    boxShadow: '0 0 5px -3px #000',
  },
  headerCreatePost: {
    background: '#dcdcdc',
    padding: [5, 15],
    marginBottom: 10,
    '& h5': {
      marginBottom: 0,
    },
  },
});

export default style(styles);
