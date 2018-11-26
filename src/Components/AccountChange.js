import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';

class AccountChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      confirmpassword: '',
      newpassword: '',
      passDismatch: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      username, oldpassword, newpassword, confirmpassword,
    } = this.state;
    if (confirmpassword === newpassword) {
      this.props.userInfoWatcher({ username, oldpassword, newpassword });
      this.setState({
        username: '',
        oldpassword: '',
        confirmpassword: '',
        newpassword: '',
        passDismatch: false,
      });
    } else {
      this.setState({ passDismatch: true });
    }
    event.target.reset();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
          {
            this.props.updateFailed === true && (
              <span className="pswd_dismatch">Old password incorrect</span>
            )
          }
          <Form className="m-5" onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                value={this.username}
                onChange={this.handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmpassword">Old Password</Label>
              {
                this.state.passDismatch === true && (
                  <span className="pswd_dismatch">Passwords are dismatch</span>
                )
              }
              <Input
                type="password"
                id="oldpassword"
                name="oldpassword"
                value={this.oldpassword}
                onChange={this.handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="newpassword">New Password</Label>
              <Input
                type="password"
                id="newpassword"
                name="newpassword"
                value={this.newpassword}
                onChange={this.handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="newpassword">Confirm Password</Label>
              <Input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                value={this.confirmpassword}
                onChange={this.handleChange}
                required
              />
            </FormGroup>
            <Button
              className="float-right primary"
            >
              Update
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

AccountChange.propTypes = {
  updateFailed: PropTypes.bool.isRequired,
  userInfoWatcher: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountChange);
