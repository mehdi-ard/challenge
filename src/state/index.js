import { GET_POST, SHOW_DRAWER, IS_MOBILE } from 'config/enums';

//post
export const posts = (post) => ({
  type: GET_POST,
  post,
});

//drawer

export const openDrawer = (show) => ({
  type: SHOW_DRAWER,
  show,
});

//screen

export const screen = (screen) => ({
  type: IS_MOBILE,
  screen,
});
