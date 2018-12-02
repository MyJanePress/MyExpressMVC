import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class RemoveModal extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);  
  }
  handleRemove() {
    const { email, index } = this.props;
    this.props.userRemoveWatcher({ email, index });
    this.props.onClose();
  }
    render() {
      if (!this.props.show) {
        return null;
      }
    return (
      <div className="backdrop">
        <div className="text-center modal-style">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-2 delete-title">
                Remove
              </div>
            </div>
            <div className="row">
              <span className="delete-warning">
                Do you want to permanently remove the items?
                &nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={ faTrashAlt } />
              </span>
            </div>
            <div className="row btn-row text-center">
              <button
                type="button"
                className="btn btn-primary btn-delete"
                onClick={ this.props.onClose }>
                Close
              </button>
              <button
                type="button"
                className="btn btn-warning btn-cancel"
                onClick={ this.handleRemove }>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RemoveModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};
export default connect(mapStateToProps, mapDispatchToProps)(RemoveModal);
