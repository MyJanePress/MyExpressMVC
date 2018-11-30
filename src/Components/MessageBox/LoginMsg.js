import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../actions/action';

/**
 * @param {props} loginFailed
 *  0: initial state
 *  1: login failed state
 *  2: login success state
 */
class LoginMsg extends Component {
  render() {
    return (
      <div className="text-center message-style">
        {
          this.props.loginFailed === 2 && (
            <div className="message-success-style">
              <span>Successfully logged in!</span>
            </div>
          )
        }
        {
          this.props.loginFailed === 1 && (
            <div className="message-failed-style">
              <span>Your Email or Password is incorrect</span>
            </div>
          )
        }
      </div>
    );
  }
}

LoginMsg.propTypes = {
  loginFailed: PropTypes.number.isRequired,
};
export default connect(mapStateToProps)(LoginMsg);
