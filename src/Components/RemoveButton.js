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
      isOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  /**
   * &times; symbol "X"
   * after double pressed, screen is can not be controlled
   */
  // toggleModal = () => {
  //   // const { email, index } = this.props;
  //   // const { modal } = this.state;
  //   // if (modal) this.props.userRemoveWatcher({ email, index });
  //   this.setState({ isOpen: !this.state.isOpen });
  // }
  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.toggleModal}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
          &nbsp;&nbsp;REMOVE
        </button>
        <RemoveModal
          show={ this.state.isOpen }
          onClose={ this.toggleModal }
          email={this.props.email}
        >
          Do you want to permanently delete the selected items?
        </RemoveModal>
          
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
