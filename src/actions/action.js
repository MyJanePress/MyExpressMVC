import { bindActionCreators } from 'redux';
import {
  loginWatcher,
  logoutWatcher,
  userAccessWatcher,
} from './actionCreators';

export const mapStateToProps = state => ({
  userlogin: state.userlogin,
  toggle: state.toggle,
  token: state.token,
  userAdmin: state.userAdmin,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  loginWatcher,
  logoutWatcher,
  userAccessWatcher,
}, dispatch);


// onLogIn: loginInfo => dispatch('LOG_IN', loginInfo),
// onLogOut: () => dispatch({ type: LOG_OUT }),
// onTogglerPress: () => dispatch({ type: COLLAPSED }),
// userSignupRuquest: userData => dispatch(
//   { type: SIGN_UP, payload: userData },
// ),
