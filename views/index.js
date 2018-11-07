import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import postReducer from './reducer/postReducer';
import { createStore } from 'redux';

const store = createStore(postReducer, {userlogin:false, toggle: false});

ReactDOM.render((<Provider store={store}><App /></Provider>), document.querySelector('#root'));