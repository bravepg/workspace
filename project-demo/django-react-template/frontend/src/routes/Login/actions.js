export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const REPLY_LOGIN = 'REPLY_LOGIN';

function shouldFetch(state){
  return !state.isFetching;
}

function requestLogin(){
  return {type: REQUEST_LOGIN}
}

export function requestLogout(){
  return {type: REQUEST_LOGOUT}
}

export function replyLogin(info){
  return {type: REPLY_LOGIN, user: info.user, auth: true}
}

export function authLogin(payload){
  return (dispatch, getState)=>{
    if(shouldFetch(getState())){
      dispatch(requestLogin());
      // var res = {
      //   user: {
      //       id:3,
      //       username:"iwencai",
      //       first_name:"Admin",
      //       user_permissions:[],
      //       groups:[],
      //       is_staff:true,
      //       is_superuser:true},
      //   auth:true,
      //   isFetching:false
      // }
      // dispatch(replyLogin(res));
      // fetch('/api/login/')
      var fd = new FormData();
      fd.append('username', payload.split('&')[0].split('=')[1]);
      fd.append('password', payload.split('&')[1].split('=')[1]);
      return fetch('/api/login/',{
        credentials:'include',
        method: 'POST',
        body: fd
      })
      .then(res => res.ok && res.json())
      .then(res => {
          if(!res || typeof res === 'string'){
              alert('网络故障');return;
          }
          if(!res.result.status){
              alert('用户名或密码错误！');return;
          }

      })
    }
  }
}
