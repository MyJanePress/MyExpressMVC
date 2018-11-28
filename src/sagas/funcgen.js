import { put, call } from 'redux-saga/effects';
import {
  login,
  logout,
  loginFailed,
  signup,
  signupFailed,
  userUpdate,
  userAccessAsync,
  userTableContentRemove,
  privateDataAsync,
} from '../actions/actionCreators';
import {
  loginApi,
  userSignupApi,
  userUpdateApi,
  userAccessApi,
  userRemoveApi,
  uploadFileApi,
  getPrivateDataApi,
  downloadApi,
} from './ajaxApi';

export function* loginEffectSaga(action) {
  try {
    const { data } = yield call(loginApi, action.payload);
    if (data === 'login_failed') {
      yield put(loginFailed());
    } else {
      localStorage.setItem('token', data);
      yield put(login(data));
    }
  } catch (e) {
    console.log(e);
  }
}
export function* logoutEffectSaga() {
  try {
    yield put(logout());
  } catch (e) {
    console.log(e);
  }
}
export function* signupSaga(action) {
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
export function* userUpdateSaga(action) {
  try {
    const { data } = yield call(userUpdateApi, action.payload);
    yield put(userUpdate(data));
  } catch (e) {
    yield put(userUpdate('updateFailed'));
  }
}
export function* userAccess() {
  try {
    const { data } = yield call(userAccessApi);
    yield put(userAccessAsync(data));
  } catch (e) {
    throw e;
  }
}
export function* userRemoveSaga(data) {
  console.log('remove data', data);
  try {
    yield call(userRemoveApi, data.payload.email);
    yield put(userTableContentRemove(data.payload.index));
  } catch (e) {
    console.log(e);
  }
}
export function* uploadFile(file) {
  try {
    yield call(uploadFileApi, file.payload);
  } catch (e) {
    console.log(e);
  }
}

export function* privateDataSaga() {
  try {
    const { data } = yield call(getPrivateDataApi);
    yield put(privateDataAsync(data));
  } catch (e) {
    console.log(e);
  }
}
export function* downloadSaga(fileId) {
  try {
    const res = yield call(downloadApi, fileId);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
