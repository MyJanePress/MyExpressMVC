import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';
import RemoveModal from './RemoveModal';

class RemoveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.handleTableRemove = this.handleTableRemove.bind(this);
  }

  /**
   * &times; strange
   * after double pressed, screen is can not be controlled
   */
  handleTableRemove() {
    const { email, index } = this.props;
    const { modal } = this.state;
    modal && this.props.userRemoveWatcher({ email, index });
    this.setState({ modal: true });
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-danger"
          data-target="#removeModal"
          data-toggle="modal"
          onClick={this.handleTableRemove}
          key="1"
        >
          <FontAwesomeIcon icon={faTrashAlt} />
          &nbsp;&nbsp;REMOVE
        </button>
        <RemoveModal />
      </div>
    );
  }
}

RemoveButton.propTypes = {
  email: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  userRemoveWatcher: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(RemoveButton);
