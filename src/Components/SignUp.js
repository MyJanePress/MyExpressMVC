import React, { Component } from 'react';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';
import { formValidation, valueValidation } from './FormValidation/FormValidation';
import ErrorMessage from './MessageBox/ErrorMessage';

import { faUser } from '@fortawesome/free-solid-svg-icons';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
      formErrors: {
        username: "",
        email: "",
        password: "",
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (valueValidation(this.state)) {
      const {
        username, email, password,
      } = this.state;

      this.props.signupWatcher({
        username, email, password,
      });
      event.target.reset();
    } 
  }

  handleChange(event) {
    const { name, value } = event.target;
    let { formErrors } = this.state;
    formErrors = formValidation(formErrors, name, value);
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { formErrors } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <Form className="m-5" onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="name">
                  <strong>Username</strong>
                  </Label>
                <Input
                  className={formErrors.username.length > 0 ? "error" : ""}
                  type="text"
                  name="username"
                  id="name"
                  placeholder="Username"
                  value={ this.userName }
                  noValidate
                  onChange={this.handleChange}
                />
                {
                  formErrors.username.length > 0 &&
                  <ErrorMessage>
                    {formErrors.username}
                  </ErrorMessage>
                }
              </FormGroup>
              <FormGroup>
                <Label for="userEmail">
                  <strong>Email</strong>
                </Label>
                <Input
                  className={formErrors.email.length > 0 ? "error" : ""}
                  type="email"
                  name="email"
                  id="userEmail"
                  placeholder="Email"
                  noValidate
                  onChange={this.handleChange}
                />
                { 
                  formErrors.email.length > 0 &&
                  <ErrorMessage>
                    {formErrors.email}
                  </ErrorMessage>
                }
              </FormGroup>
              <FormGroup>
                <Label for="userPass">
                  <strong>Password</strong>
                </Label>
                <Input
                  className={formErrors.password.length > 0 ? "error" : ""}
                  type="password"
                  name="password"
                  id="userPass"
                  placeholder="User Password"
                  noValidate
                  onChange={this.handleChange}
                />
                {
                  formErrors.password.length > 0 &&
                  <ErrorMessage>
                    {formErrors.password}
                  </ErrorMessage>
                }
              </FormGroup>
              <Button
                className="float-right btn-primary"
              >
                  <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;Sign Up
              </Button>
            </Form>
          </div>
        </div>

      </div>
    );
  }
}

SignUp.propTypes = {
  signupWatcher: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
