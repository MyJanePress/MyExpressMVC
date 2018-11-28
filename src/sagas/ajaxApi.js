import axios from 'axios';

export const loginApi = authParams => axios.request({
  method: 'post',
  url: '/api/login',
  data: authParams,
});
export const userAccessApi = () => axios.request({
  method: 'get',
  url: '/api/userinfo',
  headers: {
    token: localStorage.getItem('token'),
  },
});
export const userSignupApi = authParams => axios.request({
  method: 'post',
  url: '/api/usersignup',
  data: authParams,
});
export const userUpdateApi = authParams => axios.request({
  method: 'put',
  url: '/api/userupdate',
  data: {
    udata: authParams,
    token: localStorage.getItem('token'),
  },
});
export const userRemoveApi = params => axios.request({
  method: 'delete',
  url: '/api/userremove',
  data: {
    remail: params,
  },
});
export const uploadFileApi = file => axios.request({
  method: 'post',
  url: '/api/file',
  data: file,
  onUploadProgress: progressEvent => {
    console.log('upload progress' + Math.round((progressEvent.loaded / progressEvent.total) * 100))
  }
});
export const getPrivateDataApi = () => axios.request({
  method: 'get',
  url: '/api/privatedata',
  headers: {
    token: localStorage.getItem('token'),
  },
});
export const downloadApi = fileId => axios.request({
  method: 'get',
  url: '/api/filedownload',
  headers: {
    ID: fileId.payload,
  },
});