const setToggle = (state) => {
  return Object.assign({}, state, { toggle: !state.toggle });
}

const setUserloginState = (state) => {
  const usertoken = localStorage.getItem('token');
  if (usertoken === '')
    return Object.assign({}, state, { userlogin: false, token: usertoken });
  else {
    return Object.assign({}, state, { userlogin: true, token: usertoken });
  }
}


const setUserAdmin = (state, action) => {
  if (action.payload.access === 'root') {
    return Object.assign({}, state, { userAdmin: 'root', userData: action.payload.tblData});
  } else {
    return Object.assign({}, state, { userAdmin: 'accss_denied'});
  }
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
    case 'SIGNUP_ASYNC':
      return setUserloginState(state);
    case 'USER_ACCESS_ASYNC':
      return setUserAdmin(state, action);
    default:
      return state;
  }
};

export default postReducer;
