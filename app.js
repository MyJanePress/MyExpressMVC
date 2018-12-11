import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config';

import userInfoRouter from './routes/userInfo';
import ssrRouter from './routes/rendering';
import { tokenCheck } from './middleware/token';

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

app.use('/api', tokenCheck, userInfoRouter);
/**
 * @param {ssrRouter} crucial part for ServerSideRendering
 */
app.use(ssrRouter);


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
