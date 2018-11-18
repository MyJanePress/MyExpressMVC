'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _action = require('../actions/action');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import '../styles/Navigation.scss';


var Navigation = function (_Component) {
    _inherits(Navigation, _Component);

    function Navigation() {
        _classCallCheck(this, Navigation);

        return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
    }

    _createClass(Navigation, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactstrap.Navbar,
                    { color: 'light', light: true, expand: 'md' },
                    _react2.default.createElement(
                        _reactstrap.NavbarBrand,
                        { href: '/' },
                        'Home'
                    ),
                    _react2.default.createElement(_reactstrap.NavbarToggler, { onClick: this.props.onTogglerPress }),
                    _react2.default.createElement(
                        _reactstrap.Collapse,
                        { isOpen: this.props.toggle, navbar: true },
                        _react2.default.createElement(
                            _reactstrap.Nav,
                            { className: 'm1-auto', navbar: true },
                            _react2.default.createElement(
                                _reactstrap.NavItem,
                                { className: 'm-2' },
                                _react2.default.createElement(
                                    _reactstrap.Button,
                                    { type: 'button' },
                                    this.props.userlogin === true ? _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/', className: 'nav_link',
                                            onClick: this.props.onLogOut },
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            'Log Out'
                                        )
                                    ) : _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/api/login',
                                            className: 'nav_link' },
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            'Log In'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactstrap.NavItem,
                                { className: 'm-2' },
                                _react2.default.createElement(
                                    _reactstrap.Button,
                                    { type: 'button' },
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/api/signup', className: 'nav_link' },
                                        'Sign Up'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _reactstrap.NavItem,
                                { className: 'm-2' },
                                _react2.default.createElement(
                                    _reactstrap.Button,
                                    { type: 'button' },
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/customer', className: 'nav_link' },
                                        'Customer'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return Navigation;
}(_react.Component);

var _default = (0, _reactRedux.connect)(_action.mapStateToProps, _action.mapDispatchToProps)(Navigation);

exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Navigation, 'Navigation', 'src/Components/Navigation.js');
    reactHotLoader.register(_default, 'default', 'src/Components/Navigation.js');
    leaveModule(module);
})();

;