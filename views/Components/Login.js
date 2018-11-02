import React, { Component } from 'react';
// import {browserHistory } from 'react-router-dom';

class Login extends Component {
    // state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <form className="form control">
                        <span>EmailAddress&nbsp;</span><input type="email" className="form control"></input>
                        <p></p>
                        <span>Password&nbsp;&nbsp;</span><input type="password" className="form control"></input>
                        <p></p>
                        <button type="button" className="form control">Log in</button>
                    </form>
                </div>
            </div> );
    }
}
 
export default Login;