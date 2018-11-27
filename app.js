import { renderToString } from 'react-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import webpack from 'webpack';

import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import renderFullPage from './template/template';
import configureStore from './src/configureStore';
import webpackConfig from './webpack.config';
import App from './src/Components/App';

import userRouter from './routes/user';
import profileRouter from './routes/profile';
import userInfoRouter from './routes/userInfo';


const app = express();
// console.log('node env', app.get('env'));
if (app.get('env') === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
  app.use(logger('dev'));
  app.use(cookieParser());
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/login', userRouter);
app.use('/api/userinfo', userInfoRouter);
app.use('/api/usersignup', userInfoRouter);
app.use('/api/userupdate', userInfoRouter);
app.use('/api/userremove', userInfoRouter);
app.use('/api/file', profileRouter);

app.use((req, res) => {
  const context = {};
  const initialState = {
    loginFailed: false,
    signupFailed: false,
    updateFailed: false,
    userData: [],
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
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({});
});

module.exports = app;
