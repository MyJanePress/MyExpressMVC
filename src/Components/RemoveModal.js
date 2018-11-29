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
                                data-dismiss="modal">
                                &times;
                            </button>
                        </div>
                        <div className="container modal-body">
                            This might be occur serious problem.
                        </div>
                    </div>
                </div>        
            </div>
        );
    }
}
 
export default RemoveModal;