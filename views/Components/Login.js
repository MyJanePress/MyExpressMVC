import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from 'react-redux';

class Login extends Component {
    render() { 
        return (
            <div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <Form className="m-5">
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="User Email"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="User Password"></Input>
                            </FormGroup>
                            <Button className="float-right m-2" onClick={this.props.onLogIn}><span id='logState'>Login</span></Button>
                            <Button className="float-right m-2">Cancel</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('userlogin --> '+state.userlogin);
    return {
        userlogin: state.userlogin
    }
};

const mapDispatchToProps = (_dispatch) => {
    return {
        onLogIn:() => _dispatch({type: 'LOG_IN'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);