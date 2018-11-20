import { bindActionCreators } from 'redux';
import {
  loginWatcher,
  logoutWatcher,
  signupWatcher,
  userAccessWatcher,
} from './actionCreators';

export const mapStateToProps = state => ({
  userlogin: state.userlogin,
  toggle: state.toggle,
  token: state.token,
  userAdmin: state.userAdmin,
  userData: state.userData,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  loginWatcher,
  logoutWatcher,
  userAccessWatcher,
  signupWatcher,
}, dispatch);
