import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';

class Home extends Component {
  componentDidMount() {
    if (this.props.token) {
      this.props.logoutWatcher();
    }
  }

  render() {
    return (
      <div className="container text-center">
        <h1>~~HomePage~~</h1>
      </div>
    );
  }
}

Home.propTypes = {
  token: PropTypes.string.isRequired,
  logoutWatcher: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
