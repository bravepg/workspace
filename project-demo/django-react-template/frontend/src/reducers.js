import { combineReducers } from 'redux';
import loginReducer from './routes/Login/reducers';

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;
