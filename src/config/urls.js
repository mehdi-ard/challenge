import evn from './env';

const common = {};

const development = {
  endPointAdmin: ' http://localhost:3004/',
};

const production = {
  endPointAdmin: ' http://localhost:3004/',
};

export default {
  ...common,
  ...evn(
    () => production,
    () => development
  ),
};
