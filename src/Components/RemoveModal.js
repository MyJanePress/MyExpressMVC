import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';
import { connect } from 'react-redux';
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
                                data-dismiss="modal">
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            Remove?
                        </div>
                        {/* <div className="modal-footer">
                            <button 
                                type="button"
                                className="btn btn-warning"
                                data-dismiss="modal"
                                onClick={this.handleTableRemove}
                            >
                                <FontAwesomeIcon icon={faTrashAlt} />
                                &nbsp;&nbsp;REMOVE
                            </button>
                        </div> */}
                    </div>
                </div>        
            </div>
        );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(RemoveModal);