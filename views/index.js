'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./Components/App');

var _App2 = _interopRequireDefault(_App);

var _redux = require('redux');

require('babel-polyfill');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

require('bootstrap/dist/css/bootstrap.min.css');

var _postReducer = require('./reducer/postReducer');

var _postReducer2 = _interopRequireDefault(_postReducer);

var _saga = require('./sagas/saga');

var _saga2 = _interopRequireDefault(_saga);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();
// import thunk from 'redux-thunk';


// const preloadedState = window.__PRELOADED_STATE__;
// delete window.__PRELOADED_STATE__;

var sagaMiddleware = (0, _reduxSaga2.default)();
var store = (0, _redux.createStore)(_postReducer2.default, (0, _redux.applyMiddleware)(sagaMiddleware));
// sagaMiddleware.run(loginWatcherSaga);

_reactDom2.default.hydrate(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_App2.default, null)
), document.querySelector('#root'));
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(sagaMiddleware, 'sagaMiddleware', 'src/index.js');
    reactHotLoader.register(store, 'store', 'src/index.js');
    leaveModule(module);
})();

;