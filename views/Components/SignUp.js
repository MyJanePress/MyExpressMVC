'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _action = require('../actions/action');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUp = function (_Component) {
    _inherits(SignUp, _Component);

    function SignUp(props) {
        _classCallCheck(this, SignUp);

        var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));

        _this.state = { userID: '', userName: '' };
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(SignUp, [{
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var _state = this.state,
                userID = _state.userID,
                userName = _state.userName;
            // console.log({ userID, userName });

            this.props.userSignupRuquest({ userID: userID, userName: userName });
            this.setState({ userID: '', userName: '' });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState(_defineProperty({}, event.target.name, event.target.value));
        }
    }, {
        key: 'render',
        value: function render() {
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
                                    { 'for': 'userId' },
                                    'User ID'
                                ),
                                _react2.default.createElement(_reactstrap.Input, { type: 'text', name: 'userID', id: 'userId',
                                    placeholder: 'ID', value: this.userID,
                                    onChange: this.handleChange })
                            ),
                            _react2.default.createElement(
                                _reactstrap.FormGroup,
                                null,
                                _react2.default.createElement(
                                    _reactstrap.Label,
                                    { 'for': 'name' },
                                    'Username'
                                ),
                                _react2.default.createElement(_reactstrap.Input, { type: 'text', name: 'userName', id: 'name',
                                    placeholder: 'Username', value: this.userName,
                                    onChange: this.handleChange })
                            ),
                            _react2.default.createElement(
                                _reactstrap.FormGroup,
                                null,
                                _react2.default.createElement(
                                    _reactstrap.Label,
                                    { 'for': 'userEmail' },
                                    'Email Address'
                                ),
                                _react2.default.createElement(_reactstrap.Input, { type: 'email', name: 'userEmail', id: 'userEmail',
                                    placeholder: 'Email Address' })
                            ),
                            _react2.default.createElement(
                                _reactstrap.FormGroup,
                                null,
                                _react2.default.createElement(
                                    _reactstrap.Label,
                                    { 'for': 'userPass' },
                                    'User Password'
                                ),
                                _react2.default.createElement(_reactstrap.Input, { type: 'password', name: 'userPass', id: 'userPass',
                                    placeholder: 'User Password' })
                            ),
                            _react2.default.createElement(
                                _reactstrap.Button,
                                { className: 'float-right primary' },
                                'Sign Up'
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

    return SignUp;
}(_react.Component);

var _default = (0, _reactRedux.connect)(_action.mapStateToProps, _action.mapDispatchToProps)(SignUp);

exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(SignUp, 'SignUp', 'src/Components/SignUp.js');
    reactHotLoader.register(_default, 'default', 'src/Components/SignUp.js');
    leaveModule(module);
})();

;