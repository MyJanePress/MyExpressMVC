import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';

class RemoveButton extends Component {
    // state = {  }
    constructor(props) {
        super(props);
        this.handleTableRemove = this.handleTableRemove.bind(this);
    }

    handleTableRemove() {
        const email = this.props.email
        this.props.userRemoveWatcher(email);
    }
    render() { 
        return ( 
            <div>
                <button
                    role='edit'
                    className='btn btn-danger'
                    key='1'
                    onClick={this.handleTableRemove}>
                            REMOVE
                </button>
            </div>
         );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(RemoveButton);