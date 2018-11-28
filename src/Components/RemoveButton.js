import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';

class RemoveButton extends Component {
  constructor(props) {
    super(props);
    this.handleTableRemove = this.handleTableRemove.bind(this);
  }

  handleTableRemove() {
    const { email, index } = this.props;
    this.props.userRemoveWatcher({ email, index });
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-danger"
          key="1"
          onClick={this.handleTableRemove}
        >
          REMOVE
        </button>
      </div>
    );
  }
}

RemoveButton.propTypes = {
  email: PropTypes.string.isRequired,
  userRemoveWatcher: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(RemoveButton);
