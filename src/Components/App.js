import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import Customer from './Customer';
import Navigation from './Navigation';
import PrivateRouter from './PrivateRouter';
import { mapStateToProps } from '../actions/action';
import { withRouter } from 'react-router';

class App extends Component {
  render() {
    return (
      <Route>
        <div className="container">
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <PrivateRouter
            path="/customer"
            component={Customer}
            userlogin={ this.props.userlogin }
          />
        </div>
      </Route>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App));
