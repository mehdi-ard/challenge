import style from 'provider/style';

const styles = (theme) => ({
  postList: {
    width: '100%',
    padding: 15,
    background: '#fff',
    borderRadius: 5,
    boxShadow: '0 0 5px -3px #000',
    marginBottom: 10,
  },
  headerPost: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    borderRadius: 100,
    marginLeft: 15,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  avatarUser: {
    display: 'flex',
    alignItems: 'center',
  },
  username: {
    fontSize: 16,
    fontWeight: 600,
    display: 'block',
  },
  imagePost: {
    width: '100%',
    paddingTop: '56.25%',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-end',
    zIndex: 1,
    transition: 'all 0.3s',
    margin: [10, 0],
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: -1,
    },
  },
  sharePost: {
    '& ul': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      '& li': {
        width: 'calc(100% / 3)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& span': {
          margin: [0, 3],
        },
      },
    },
  },
  comment: {
    width: '100%',
    padding: 15,
    background: '#fff',
    borderRadius: 5,
    boxShadow: '0 0 5px -3px #000',
    marginBottom: 10,
  },
  likeMenu: {
    display: 'flex',
  },
  countLike: {
    display: 'flex',
    alignItems: 'center',
    '& i': {
      fontSize: 18,
      fontStyle: 'normal',
      marginRight: -12,
      display: 'flex',
      '&:first-child:': {
        marginRight: '15px !important',
      },
      '&:last-child:': {
        marginLeft: 15,
      },
    },
  },
  listLike: {
    display: 'flex',
    boxShadow: '0 0 5px -3px #000',
    borderRadius: 50,
    padding: 8,
    background: '#fff',
    justifyContent: 'space-between',

    '& li': {
      fontSize: 18,
      cursor: 'pointer',
    },
  },
  coutnLike: {
    display: 'flex',
    marginRight: 15,
  },
});

export default style(styles);
