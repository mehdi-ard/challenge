import { GET_POST } from 'config/enums';
import storage from 'storage';

const getPost = storage.get('post');

const post = (state = getPost, action) => {
  switch (action.type) {
    case GET_POST:
      return [storage.set('post', action.post)];
    default:
      return state;
  }
};

export default post;
