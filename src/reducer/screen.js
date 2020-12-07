import { IS_MOBILE } from 'config/enums';

const screen = (state = false, action) => {
  switch (action.type) {
    case IS_MOBILE:
      return action.screen;
    default:
      return state;
  }
};

export default screen;
