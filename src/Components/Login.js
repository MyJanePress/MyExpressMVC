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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.loginWatcher({ email, password });
    // this.setState({ login: true });
    event.target.reset();
  }

  /**
   * @see https://scotch.io/tutorials/using-font-awesome-5-with-react
   * react fontawesome
   */
  render() {
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
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={this.email}
                  onChange={event => this.handleChange(event)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">
                  <strong>
                    Password
                  </strong>
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={this.password}
                  placeholder="Password"
                  onChange={event => this.handleChange(event)}
                  required
                />
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
