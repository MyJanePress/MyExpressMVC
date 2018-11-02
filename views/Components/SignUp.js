import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {browserHistory} from 'react-router-dom';

class SignUp extends Component {
    // state = {  }
    render() { 
        return (
            // <Router>
            <div className="container text-center">
                <div className="row m-2">
                    <div className="col-lg-4 text-left">
                            <h6>First Name</h6><input type="text" className="form control"></input>
                            <h6>Last Name</h6><input type="text" className="form control"></input>
                            <p><button type="button">Create Account</button></p>
                    </div>         
                </div>
            </div>
            
            // </Router>
            
         );
    }
}
 
export default SignUp;