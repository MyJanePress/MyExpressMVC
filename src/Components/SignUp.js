import React, { Component } from 'react';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', email: '', password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      username, email, password,
    } = this.state;
    this.props.signupWatcher({
      username, email, password,
    });
    this.setState({
      username: '', email, password,
    });
    event.target.reset();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            {/* {
              this.props.signupFailed === true && (
                <span>User another email or userID</span>
              )
            } */}
            <Form className="m-5" onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="name">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="name"
                  placeholder="Username"
                  value={this.userName}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="userEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="userEmail"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="userPass">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="userPass"
                  placeholder="User Password"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button
                className="float-right primary"
              >
                  Sign Up
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
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
