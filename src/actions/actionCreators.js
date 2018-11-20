export function loginWatcher(authParams) {
  return { type: 'LOGIN_WATCHER', payload: authParams };
}
export function logoutWatcher() {
  return { type: 'LOGOUT_WATCHER' };
}

export function signupWatcher(authuParams) {
  return {type: 'SIGNUP_WATCHER', payload:authuParams}
}

export function userAccessWatcher(token) {
  return { type: 'USER_ACCESS_WATCHER', payload: token}
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
export function userAccessAsync(token) {
  return { type: 'USER_ACCESS_ASYNC', payload: token}
}
