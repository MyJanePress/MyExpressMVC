import React, { Component } from 'react';

class RemoveModal extends Component {
  render() {
    return (
      <div className="container modal" id="removeModal">
        <div className="dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
              >
                Remove
              </button>
            </div>
            <div className="container modal-body">
                Do you want permanently remove the selected item?
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RemoveModal;
