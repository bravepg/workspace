import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const createStoreMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
)(createStore);

function configureStore(state) {
  return createStoreMiddleware(rootReducer, state)
}

export const store = configureStore();
