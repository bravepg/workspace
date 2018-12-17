import { combineReducers } from 'redux';
import * as Actions from './actions';

function setExpire(expire_day_cnt){
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth();
  let date = time.getDate();
  date += expire_day_cnt;
  if(date>30){
    date -= 30;
    month += 1;
  }
  if(month>11){
    // month 0-11 所以-11
    month -= 11;
    year += 1;
  }
  time.setYear(year);
  time.setMonth(month);
  time.setDate(date);
  return time
}

function userInfo(state = {
  isFetching: false, user: {}, auth: false
}, action){
  switch (action.type) {
    case Actions.REQUEST_LOGIN:
      return Object.assign({}, state, {isFetching: true})
    case Actions.REQUEST_LOGOUT:
      delete sessionStorage['user'];
      return Object.assign({}, state, {isFetching: false, user: {}, auth: false})
    case Actions.REPLY_LOGIN:
      let userInfo = {user: action.user, auth: action.auth, isFetching: false}
      if(action.auth){
        sessionStorage['user'] = JSON.stringify(userInfo);
        sessionStorage['auth_expire'] = setExpire(10).toISOString().split('T')[0];
      }
      return Object.assign({}, state, userInfo)
    default:
      return state;
  }
}

const loginReducer = combineReducers({
  userInfo,
});

export default loginReducer;
