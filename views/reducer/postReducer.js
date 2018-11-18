'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { userlogin: false };
  var action = arguments[1];

  switch (action.type) {
    case 'LOGIN_ASYNC':
      return state;
    // case 'COLLAPSED':
    //   return Object.assign({}, state, { toggle: !state.toggle });
    // case 'LOG_OUT':
    //   return { userlogin: false };
    // case 'SIGN_UP':
    //   return axios.post('/api/users', action.payload);
    default:
      return state;
  }
};

var _default = rootReducer;
exports.default = _default;

// const { email, password } = action.payload;
// return (email === "janepress940214@gmail.com" && password === "a" ?
//   (

//         Object.assign({}, state, { userlogin: true })
//     ) : (
//         Object.assign({}, state, { userlogin: false })
//   ) )
// console.log(email)

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(rootReducer, 'rootReducer', 'src/reducer/postReducer.js');
  reactHotLoader.register(_default, 'default', 'src/reducer/postReducer.js');
  leaveModule(module);
})();

;