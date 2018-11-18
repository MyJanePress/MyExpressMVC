'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _reactRedux = require('react-redux');

var _action = require('../actions/action');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.state = { email: '', password: '' };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(Login, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState(_defineProperty({}, event.target.name, event.target.value));
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var _state = this.state,
                email = _state.email,
                password = _state.password;

            this.props.loginWatcher({ email: email, password: password });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement('div', { className: 'col-md-3' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        _react2.default.createElement(
                            _reactstrap.Form,
                            { className: 'm-5', onSubmit: this.handleSubmit },
                            _react2.default.createElement(
                                _reactstrap.FormGroup,
                                null,
                                _react2.default.createElement(
                                    _reactstrap.Label,
                                    { 'for': 'email' },
                                    'Email'
                                ),
                                _react2.default.createElement(_reactstrap.Input, { type: 'email', name: 'email', id: 'email',
                                    placeholder: 'User Email', value: this.email,
                                    onChange: function onChange(event) {
                                        return _this2.handleChange(event);
                                    },
                                    required: true })
                            ),
                            _react2.default.createElement(
                                _reactstrap.FormGroup,
                                null,
                                _react2.default.createElement(
                                    _reactstrap.Label,
                                    { 'for': 'password' },
                                    'Password'
                                ),
                                _react2.default.createElement(_reactstrap.Input, { type: 'password', name: 'password',
                                    id: 'password', value: this.password,
                                    placeholder: 'User Password',
                                    onChange: function onChange(event) {
                                        return _this2.handleChange(event);
                                    },
                                    required: true })
                            ),
                            _react2.default.createElement(
                                _reactstrap.Button,
                                { type: 'submit', className: 'float-right m-2' },
                                _react2.default.createElement(
                                    'span',
                                    { id: 'logState' },
                                    'Log In'
                                )
                            ),
                            _react2.default.createElement(
                                _reactstrap.Button,
                                { className: 'float-right m-2' },
                                'Cancel'
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

    return Login;
}(_react.Component);

var _default = (0, _reactRedux.connect)(_action.mapStateToProps, _action.mapDispatchToProps)(Login);

exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Login, 'Login', 'src/Components/Login.js');
    reactHotLoader.register(_default, 'default', 'src/Components/Login.js');
    leaveModule(module);
})();

;