import { post, get, patch } from './api';

export default {
  post: {
    list: async () => {
      return await get({
        api: 'posts',
      });
    },
    create: async (model) => {
      return await post({
        api: 'posts',
        model,
      });
    },
    getComment: async (id) => {
      return await get({
        api: `post/${id}/comments`,
      });
    },
    addComment: async ({ id, ...model }) => {
      return await post({
        api: `post/${id}/comments`,
        model,
      });
    },
    likePost: async ({ id, ...model }) => {
      return await patch({
        api: `posts/${id}`,
        model,
      });
    },
  },
};
