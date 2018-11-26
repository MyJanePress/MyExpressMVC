import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
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

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <Form className="m-5" onSubmit={this.handleSubmit}>
              {
                this.props.loginFailed ? (
                  'Try again, Your login Information are incorrect'
                ) : (
                  <span />
                )
              }
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="User Email"
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
                  placeholder="User Password"
                  onChange={event => this.handleChange(event)}
                  required
                />
              </FormGroup>
              <Button type="submit" className="float-right m-2">
                <span id="logState">Log In</span>
              </Button>
              <Button className="float-right m-2">Cancel</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
