import { SHOW_DRAWER } from 'config/enums';

const loading = (state = false, action) => {
  switch (action.type) {
    case SHOW_DRAWER:
      return action.show;
    default:
      return state;
  }
};

export default loading;
