const setToggle = state => Object.assign({}, state, { toggle: !state.toggle });

const setUserloginState = (state) => {
  const usertoken = localStorage.getItem('token');
  if (usertoken === '') return Object.assign({}, state, { userlogin: false, token: usertoken });

  return Object.assign({}, state, { userlogin: true, token: usertoken });
};
const removeTableContent = (state, action) => {
  const content = [...state.userData];
  console.log('content', content);
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
      return setUserloginState(state);
    case 'COLLAPSED':
      return setToggle(state);
    case 'LOGOUT_ASYNC':
      localStorage.clear();
      return Object.assign({}, state, { userlogin: false, token: '' });
    case 'SIGNUP_ASYNC':
      return setUserloginState(state);
    case 'UPDATE_ASYNC':
      return setUserloginState(state);
    case 'USER_ACCESS_ASYNC':
      return setUserAdmin(state, action);
    case 'REMOVE_CONTENT_ASYNC':
      return removeTableContent(state, action);
    default:
      return state;
  }
};

export default postReducer;
