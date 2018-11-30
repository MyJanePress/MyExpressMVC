import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import Customer from './Customer';
import Navigation from './Navigation';
import PrivateRouter from './PrivateRouter';
import AccountChange from './AccountChange';
import { mapStateToProps } from '../actions/action';
import PrivacyData from './PrivacyData';


/**
 * @param {this.props} token-defined in store, app.js
 *
 */
class App extends Component {
  render() {
    return (
      <Route>
        <div className="container">
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/accountchange" exact component={AccountChange} />
          <PrivateRouter
            path="/privacy"
            exact
            component={PrivacyData}
            token={this.props.token}
          />
          <PrivateRouter
            path="/customer"
            component={Customer}
            token={this.props.token}
          />
        </div>
      </Route>
    );
  }
}

App.propTypes = {
  token: PropTypes.string.isRequired,
};


export default withRouter(connect(mapStateToProps)(App));
