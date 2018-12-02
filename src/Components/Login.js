import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';
import LoginMsg from './MessageBox/LoginMsg';
import { formValidation, valueValidation } from './FormValidation/FormValidation';
import ErrorMessage from './MessageBox/ErrorMessage';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: "",
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let { formErrors } = this.state;
    const { name, value } = event.target;
    formErrors = formValidation(formErrors, name, value);
    this.setState({ formErrors, [name]: value });
    // console.log(formErrors);
  };

  handleSubmit(event) {
    event.preventDefault();
    if (valueValidation(this.state)) {
      const { email, password } = this.state;
      this.props.loginWatcher({ email, password });
      event.target.reset(); 
    }
  }

  /**
   * @see https://scotch.io/tutorials/using-font-awesome-5-with-react
   * react fontawesome
   */
  render() {
    const { formErrors } = this.state;

    return (
      <div className="container">
        <div className="row m-5">
          <div className="col-lg-5" />
          <div className="col-lg-6 login-style">
            <Form className="m-5 " onSubmit={this.handleSubmit}>
              <LoginMsg />
              <FormGroup>
                <Label for="email">
                  <strong>Email</strong>
                </Label>
                <Input
                  className={formErrors.email.length > 0 ? "error" : ""}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={ this.email }
                  noValidate
                  onChange={event => this.handleChange(event)}
                />
                {
                  formErrors.email.length > 0 &&
                  <ErrorMessage>
                    {formErrors.email}
                  </ErrorMessage>
                }
              </FormGroup>
              <FormGroup>
                <Label for="password">
                  <strong>
                    Password
                  </strong>
                </Label>
                <Input
                  className={formErrors.password.length > 0 ? "error" : ""}
                  type="password"
                  name="password"
                  id="password"
                  value={this.password}
                  placeholder="Password"
                  noValidate
                  onChange={event => this.handleChange(event)}
                />
                {
                  formErrors.password.length > 0 && (
                    <ErrorMessage>
                      {formErrors.password}
                    </ErrorMessage>
                  )
                }
              </FormGroup>
              <FormGroup>
                <Label check>
                  <Input
                    type="checkbox"
                  />
                  {' '}
                Remember me
                </Label>
              </FormGroup>
              <FormGroup>
                <Button
                  type="submit"
                  className="btn-success  btn-size"
                >
                  <span id="logState">Log In</span>
                </Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginWatcher: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
