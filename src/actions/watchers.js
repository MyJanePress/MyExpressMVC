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
export function privacyWatcher(authParams) {
  return { type: 'UPLOAD_FILE_WATCHER', payload: authParams };
}
