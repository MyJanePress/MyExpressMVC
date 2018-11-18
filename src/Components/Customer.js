import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../actions/action';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = { access: '' };
  }
  render() {
    if (this.props.userAdmin === 'root') {
      return (
        <div className="text-center">
          <h1>User Management</h1>
        </div>
      )
    }
    else {
      return (
        <div className="text-center">
          <h1>User not Proper</h1>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps)(Customer);
