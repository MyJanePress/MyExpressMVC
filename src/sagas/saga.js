import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  updateProfile,
  logout,
  userAccessAsync,
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
    'token': localStorage.getItem('token'),
  }
})

function* loginEffectSaga(action) {
  try {
    const { data } = yield call(loginApi, action.payload);
    localStorage.setItem('token', data);
    yield put(updateProfile(data));
  } catch (e) {
    console.log(e);
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
function* logoutEffectSaga() {
  try {
    yield put(logout()); 
  } catch (e) {
    console.log(e);
  }
}
export default function* loginWatcherSaga() {
  yield takeLatest('LOGIN_WATCHER', loginEffectSaga);
  yield takeLatest('LOGOUT_WATCHER', logoutEffectSaga);
  yield takeLatest('USER_ACCESS_WATCHER', userAccess);
}
