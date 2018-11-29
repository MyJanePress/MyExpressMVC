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
    event.target.reset();
  }
  /**
   * @see https://scotch.io/tutorials/using-font-awesome-5-with-react 
   * react fontawesome
   */
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <Form className="m-5" onSubmit={this.handleSubmit}>
              {
                this.props.loginFailed && (
                  <span>
                    The Email or Password is incorrect
                  </span>
                )
              }
              <FormGroup>
                <Label for="email">Email</Label>
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
                <Label for="password">Password</Label>
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
                <Button type="submit" className="float-right m-2">
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
  loginFailed: PropTypes.bool.isRequired,
  loginWatcher: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
