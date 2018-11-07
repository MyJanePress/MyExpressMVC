import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './action';

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
                                <Input type="email" name="email" id="email" placeholder="User Email" required></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="User Password" required></Input>
                            </FormGroup>
                            <Button className="float-right m-2" onClick={this.props.onLogIn}><span id='logState'>Log In</span></Button>
                            <Button className="float-right m-2">Cancel</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);