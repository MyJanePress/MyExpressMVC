import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  login,
  logout,
  loginFailed,
  signup,
  signupFailed,
  userUpdate,
  userAccessAsync,
  userTableContentRemove,
} from '../actions/actionCreators';

const loginApi = authParams => axios.request({
  method: 'post',
  url: '/api/login',
  data: authParams,
});
const userAccessApi = () => axios.request({
  method: 'get',
  url: '/api/userinfo',
  headers: {
    token: localStorage.getItem('token'),
  },
});
const userSignupApi = authParams => axios.request({
  method: 'post',
  url: '/api/usersignup',
  data: authParams,
});
const userUpdateApi = authParams => axios.request({
  method: 'put',
  url: '/api/userupdate',
  data: {
    udata: authParams,
    token: localStorage.getItem('token'),
  },
});
const userRemoveApi = params => axios.request({
  method: 'delete',
  url: '/api/userremove',
  data: {
    remail: params,
  },
});
function* loginEffectSaga(action) {
  try {
    const { data } = yield call(loginApi, action.payload);
    if (data === 'login_failed') {
      yield put(loginFailed());
    }
    else {
      localStorage.setItem('token', data);
      yield put(login(data)); 
    }
  } catch (e) {
    console.log(e);
  }
}
function* logoutEffectSaga() {
  try {
    yield put(logout());
  } catch (e) {
    console.log(e);
  }
}
function* signupSaga(action) {
  try {
    const { data } = yield call(userSignupApi, action.payload);
    if (data === 'signupFailed') {
      yield put(signupFailed());
    } else {
      localStorage.setItem('token', data);
      yield put(signup(data));
    }

  } catch (e) {
    console.log(e);
  }
}
function* userUpdateSaga(action) {
  try {
    const { data } = yield call(userUpdateApi, action.payload);
    yield put(userUpdate(data));
  } catch (e) {
    yield put(userUpdate('updateFailed'));
  }
}
function* userAccess() {
  try {
    const { data } = yield call(userAccessApi);
    yield put(userAccessAsync(data));
  } catch (e) {
    throw e;
  }
}
function* userRemoveSaga(email) {
  try {
    yield call(userRemoveApi, email.payload);
    yield put(userTableContentRemove(email.payload));
  } catch (e) {
    console.log(e);
  }
}
export default function* loginWatcherSaga() {
  yield takeLatest('LOGIN_WATCHER', loginEffectSaga);
  yield takeLatest('LOGOUT_WATCHER', logoutEffectSaga);
  yield takeLatest('SIGNUP_WATCHER', signupSaga);
  yield takeLatest('USER_INFO_UPDATE_WATCHER', userUpdateSaga);
  yield takeLatest('USER_ACCESS_WATCHER', userAccess);
  yield takeLatest('USER_REMOVE_WATCHER', userRemoveSaga);
}
