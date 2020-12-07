import { combineReducers } from 'redux';
import screen from './screen';
import post from './post';
import drawer from './drawer';

export default combineReducers({
  screen,
  post,
  drawer,
});
