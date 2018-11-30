import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';

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
      const backdropStyle = {
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0,0,0,0.3)',
          padding: 50
      };
      const modalStyle = {
          display: 'block',
          backgroundColor: '#fff',
          borderRadius: 5,
          maxWidth: '30%',
          // maxHeight: 300,
          margin: '20% auto',
          padding: 30,
      };
        
    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="text-center" style={ modalStyle }>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-2 delete-title">Remove</div>
            </div>
            <div className="row">
              <span className="delete-warning">
                `Do you want to permanently remove the {this.props.email} data?`
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
                className="btn btn-default btn-cancel"
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
