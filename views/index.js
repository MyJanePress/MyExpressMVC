import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import postReducer from './reducer/postReducer';
import { createStore } from 'redux';
const store = createStore(postReducer, {age:21, userlogin:false, toggle: false});

ReactDOM.render((<Provider store={store}><App /></Provider>), document.querySelector('#root'));