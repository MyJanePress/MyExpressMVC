const setUserloginState = (state, action) => {
  if (action.payload === '') {
    return Object.assign(
      {},
      state,
      { loginFailed: true },
    );
  }

  return Object.assign({}, state, { loginFailed: false, token: action.payload });
};
const userUpdate = (state, data) => {
  if (data.payload === 'successed') {
    return Object.assign({}, state, { updateFailed: false });
  }
  return Object.assign({}, state, { updateFailed: true });
};
const removeTableContent = (state, action) => {
  const content = [...state.userData];
  content.splice(action.payload, 1);
  return Object.assign({}, state, { userData: content });
};
const setUserAdmin = (state, action) => {
  if (action.payload.access === 'root') {
    return Object.assign({}, state, { userAdmin: 'root', userData: action.payload.tblData });
  }
  return Object.assign({}, state, { userAdmin: 'accss_denied' });
};

const postReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_ASYNC':
      return setUserloginState(state, action);
    case 'LOGOUT_ASYNC':
      localStorage.clear();
      return Object.assign({}, state, { token: '' });
    case 'LOGIN_FAILED':
      return Object.assign({}, state, { loginFailed: true });
    case 'SIGNUP_ASYNC':
      return setUserloginState(state, action);
    case 'SIGNUP_FAILED':
      return Object.assign({}, state, { signupFailed: true });
    case 'UPDATE_ASYNC':
      return userUpdate(state, action);
    case 'USER_ACCESS_ASYNC':
      return setUserAdmin(state, action);
    case 'REMOVE_CONTENT_ASYNC':
      return removeTableContent(state, action);
    default:
      return state;
  }
};

export default postReducer;
