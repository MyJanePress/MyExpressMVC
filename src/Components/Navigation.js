import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className='navbar navbar-expand-md navbar-light bg-light'>
        <li className='navbar-brand'>
          <Link to='/' >Home</Link>
        </li>
        <button
          type='button'
          className='navbar-toggler'
          data-toggle='collapse'
          data-target='#targetNavbar'>
          <span className='navbar-toggler-icon'></span>
        </button>
        
        <div
          className='collapse navbar-collapse'
          id='targetNavbar'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              {
                this.props.token ? (
                  <Link
                  to="/customer"
                  className="nav_link"
                  onClick={this.props.userAccessWatcher}
                  >
                    Customer
                  </Link>
                ): (
                  <Link to="/customer" className="nav_link">
                    Customer
                  </Link>
                )
              }

            </li>
          </ul>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item m-2'>
              {
                this.props.token ? (
                  <span></span>
                ): (
                  <Link to="/signup" className="nav_link">
                    Sign Up
                  </Link>
                )
              }
            </li>
            <li className='nav-item m-2'>
            {
              this.props.token ? (
                  <Link
                    to="/"
                    className="nav_link"
                    onClick={this.props.logoutWatcher}
                  >
                    <span>Log Out</span>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="nav_link"
                  >
                    <span>Log In</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
