'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PrivateRouter = function PrivateRouter(_ref) {
  var Component = _ref.component,
      rest = _objectWithoutProperties(_ref, ['component']);

  return _react2.default.createElement(_reactRouterDom.Route, {
    path: rest.path,
    render: function render(props) {
      return rest.userlogin === true ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, {
        to: {
          pathname: "/api/login",
          state: { from: props.location }
        }
      });
    }
  });
};

var _default = PrivateRouter;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PrivateRouter, 'PrivateRouter', 'src/Components/PrivateRouter.js');
  reactHotLoader.register(_default, 'default', 'src/Components/PrivateRouter.js');
  leaveModule(module);
})();

;