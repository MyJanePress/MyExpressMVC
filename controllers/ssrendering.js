import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import App from '../src/Components/App';

import configureStore from "../src/configureStore";
import { renderToString } from 'react-dom/server';
import renderFullPage from '../template/template';

export const serverSideRendering = (req, res) => {
  const context = {};
  const initialState = {
    loginFailed: false,
    signupFailed: false,
    updateFailed: false,
    userData: [],
    privateData: [],
    token: '',
    userAdmin: '',
  };

  const store = configureStore(initialState);
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    </Provider>,
  );
  const preloadedState = store.getState();
  res.send(renderFullPage(html, preloadedState));
}