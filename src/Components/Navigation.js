import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';
import {
  faHome,
  faSignInAlt,
  faSignOutAlt,
  faUser
} from '@fortawesome/free-solid-svg-icons';

/**
 * @todo define propTypes for each props
 * @see https://fontawesome.com/icons?d=gallery
 *
 */
class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light  bg-color">
        <li className="navbar-brand m-2 home">
          <Link to="/">
            <FontAwesomeIcon icon={faHome}/>Home
          </Link>
        </li>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#targetNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse"
          id="targetNavbar"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item m-2">
              {
                <Link
                  to="/privacy"
                  className="nav_link"
                >
                  PrivacyData
                </Link>
              }
            </li>
            <li className="nav-item m-2">
              {
                <Link
                  to="/customer"
                  className="nav_link"
                >
                  Customer
                </Link>
              }
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item m-2">
              {
                this.props.token ? (
                  null
                ) : (
                    <Link to="/signup" className="nav_link">
                      <FontAwesomeIcon icon={faUser}/>
                      &nbsp;&nbsp;Sign Up
                    </Link>
                )
              }
            </li>
            <li className="nav-item m-2">
              {
              this.props.token ? (
                <Link
                  to="/"
                  className="nav_link"
                >
                    <span>
                      <FontAwesomeIcon icon={ faSignOutAlt }/>
                      &nbsp;&nbsp;Log Out
                    </span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="nav_link"
                >
                      <FontAwesomeIcon icon={ faSignInAlt } />
                      &nbsp;&nbsp;Log In
                </Link>
              )
              }
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

Navigation.propTypes = {
  token: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
