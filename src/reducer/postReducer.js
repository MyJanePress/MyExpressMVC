import axios from 'axios';

const setToggle = (state) => {
  return Object.assign({}, state, { toggle: !state.toggle });
}

const setUserloginState = (state) => {
  const usertoken = localStorage.getItem('token');
  Object.assign({}, state, { token: usertoken });
  if (usertoken === '')
    return Object.assign({}, state, { userlogin: false, token: usertoken });
  else {
    return Object.assign({}, state, { userlogin: true, token: usertoken });
  }
}

const setUserAdmin = (state, action) => {
  return Object.assign({}, state, { userAdmin: 'root' });
}

const postReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_ASYNC':
      return setUserloginState(state)
    case 'COLLAPSED':
      return setToggle(state);
    case 'LOGOUT_ASYNC':
      localStorage.clear();
      return Object.assign({}, state, { userlogin: false, token:'' });
    case 'SIGN_UP':
      return axios.post('/api/users', action.payload);
    case 'USER_ACCESS_ASYNC':
      return setUserAdmin(state, action);
    default:
      return state;
  }
};

export default postReducer;
