import React, { Component } from 'react';

class ErrorMessage extends Component {
    render() { 
        return ( 
            <span className="error-message">
                {this.props.children}
            </span>
         );
    }
}
 
export default ErrorMessage;