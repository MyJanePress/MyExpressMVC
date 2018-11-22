import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './Components/App';
import configureStore from './configureStore';
import './styles/index.scss';

const customHistory = createBrowserHistory();

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);
ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={customHistory}>
      <App />
    </Router>
  </Provider>, document.querySelector('#root'),
);
