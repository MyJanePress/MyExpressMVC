import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';
class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.token) {
      this.props.logoutWatcher(); 
    }
  }
  render() {
    return (
      <div className="container text-center">
        <h1>Create Account Or Log In</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
