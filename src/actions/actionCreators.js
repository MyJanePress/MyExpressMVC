export function loginWatcher(authParams) {
  return { type: 'LOGIN_WATCHER', payload: authParams };
}
export function logoutWatcher() {
  return { type: 'LOGOUT_WATCHER' };
}

export function signupWatcher(authParams) {
  return { type: 'SIGNUP_WATCHER', payload: authParams };
}
export function userRemoveWatcher(email) {
  return { type: 'USER_REMOVE_WATCHER', payload: email };
}
export function userAccessWatcher(token) {
  return { type: 'USER_ACCESS_WATCHER', payload: token };
}

export function userInfoWatcher(authParams) {
  return { type: 'USER_INFO_UPDATE_WATCHER', payload: authParams };
}
export function updateProfile(data) {
  return { type: 'LOGIN_ASYNC', payload: data };
}

export function logout() {
  return { type: 'LOGOUT_ASYNC' };
}

export function signup(token) {
  return { type: 'SIGNUP_ASYNC', payload: token };
}
export function userUpdate(token) {
  return { type: 'UPDATE_ASYNC', payload: token };
}
export function userTableContentRemove(key) {
  return { type: 'REMOVE_CONTENT_ASYNC', payload: key };
}
export function userAccessAsync(token) {
  return { type: 'USER_ACCESS_ASYNC', payload: token };
}
