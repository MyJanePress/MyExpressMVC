import React, { Component } from 'react';
import {Form, FormGroup,Label, Input, Button} from 'reactstrap';

class SignUp extends Component {
    render() { 
        return (
            <div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <Form className="m-5">
                        <FormGroup>
                            <Label for="firstName">FirstName</Label>
                            <Input type="text" name="firstName" id="firstName" placeholder="First Name"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">LastName</Label>
                            <Input type="text" name="lastName" id="lastName" placeholder="Last Name"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="userEmail">Email Address</Label>
                            <Input type="email" name="userEmail" id="userEmail" placeholder="Email Address"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="userPass">User Password</Label>
                            <Input type="password" name="userPass" id="userPass" placeholder="User Password"></Input>
                        </FormGroup>
                        <Button className="float-right primary">Sign Up</Button>
                    </Form>
                </div>
            </div>
            
            </div>            
         );
    }
}
 
export default SignUp;