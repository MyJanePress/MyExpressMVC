import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      userID: '',
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
    const { userID, username, confirmpassword, newpassword } = this.state;
    if (confirmpassword === newpassword) {
      this.props.userInfoWatcher({ userID, username, newpassword });
      this.setState({
        userID: '',
        confirmpassword: '',
        newpassword: '',
        passDismatch: false,
      });
    }
    else {
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
            this.props.updateFailed === true ? (
              <span>Your User ID is invalide</span>
            ) : (
              <span></span>
            )
          }
          <Form className="m-5" onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="userID">User ID</Label>
              <Input
                type="text"
                id="userID"
                name="userID"
                placeholder="Enter Your new ID"
                value={this.userID}
                onChange={this.handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="username">User Name</Label>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="User Name"
                value={this.username}
                onChange={this.handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmpassword">Confirm Password</Label>
              {
                this.state.passDismatch === true ? (
                    <span className='pswd_dismatch'>Passwords are dismatch</span>
                ): (
                    <span></span>
                )
              }
              <Input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="Confirm Password"
                value={this.confirmpassword}
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
                placeholder="Enter New Password"
                value={this.newpassword}
                onChange={this.handleChange}
                required
              />
            </FormGroup>
            <Button
              className="float-right primary"
            >
                            Confirm
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountChange);
