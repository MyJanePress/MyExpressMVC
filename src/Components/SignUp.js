import React, { Component } from 'react';
import {Form, FormGroup,Label, Input, Button} from 'reactstrap';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';
import { connect } from 'react-redux';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { userID:'', username: '', email: '',password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const { userID, username, email, password } = this.state; 
        this.props.signupWatcher({ userID, username, email, password });
        this.setState({ userID: '', username: '', email, password });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() { 
        return (
            <div>
                <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <Form className="m-5" onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="userId">User ID</Label>
                            <Input type="text" name="userID" id="userId"
                                placeholder="ID" value={this.userID}
                                    onChange={this.handleChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="name">Username</Label>
                                <Input
                                    type="text" name="username" id="name"
                                    placeholder="Username" value={this.userName}
                                    onChange={this.handleChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="userEmail">Email Address</Label>
                            <Input type="email" name="email" id="userEmail"
                                    placeholder="Email Address"
                                    onChange={ this.handleChange }></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="userPass">User Password</Label>
                            <Input type="password" name="password" id="userPass"
                                    placeholder="User Password"
                                    onChange={this.handleChange}></Input>
                        </FormGroup>
                            <Button
                                className="float-right primary"
                                >Sign Up</Button>
                    </Form>
                </div>
            </div>
            
            </div>            
         );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);