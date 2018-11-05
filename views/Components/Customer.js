import React, { Component } from 'react';
import { connect } from 'react-redux';

class Customer extends Component {
    render() { 
        return ( 
            <div className="text-center">
                <h1>User Management</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userlogin: state.userlogin
    }
};

export default connect(mapStateToProps)(Customer);