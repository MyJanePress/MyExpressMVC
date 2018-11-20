import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../actions/action';
import CustomerData from './CustomerData';

class Customer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.userAdmin === 'root') {
      return (
        <CustomerData />
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
