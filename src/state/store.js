// import { createLogger } from 'redux-logger';
import reducer from 'reducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const middelware = [];
if (process.env.NODE_ENV !== 'production') {
  // middelware.push(createLogger());
  middelware.push();
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middelware))
);

export default store;
