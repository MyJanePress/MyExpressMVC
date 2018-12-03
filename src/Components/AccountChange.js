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
import {
  mapStateToProps,
  mapDispatchToProps
} from '../actions/action';
import {
  formValidation,
  valueValidation,
  passMatch
} from './FormValidation/FormValidation';
import ErrorMessage from './MessageBox/ErrorMessage';

class AccountChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      confirmpassword: null,
      newpassword: null,
      formErrors: {
        username: "",
        password: "",
        confirmpassword: "",
        newpassword: "",
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      username,
      password,
      newpassword,
      confirmpassword,
    } = this.state;
    if (passMatch(newpassword, confirmpassword))
        this.props.userInfoWatcher({ username, password, newpassword })
    
    event.target.reset();
  }

  handleChange(event) {
    let { formErrors } = this.state;
    const { name, value } = event.target;
    formErrors = formValidation(formErrors, name, value);

    this.setState({
      formErrors,
      [name]: value,
    });
  };

  render() {
    const { confirmpassword, newpassword, formErrors } = this.state;
    return (
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
          {
            this.props.updateFailed && (
              <span className="pswd_dismatch">Old password incorrect</span>
            )
          }
          <Form className="m-5" onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                className={formErrors.username.length > 0 ? "error" : ""}
                type="text"
                id="username"
                name="username"
                value={this.username}
                onChange={this.handleChange}
                noValidate
              />
              {
                formErrors.username.length > 0 &&
                <ErrorMessage>
                  {formErrors.username}
                </ErrorMessage>
              }
            </FormGroup>
            <FormGroup>
              <Label for="confirmpassword">Old Password</Label>
              <Input
                className={formErrors.password.length > 0 ? "error" : ""}
                type="password"
                id="password"
                name="password"
                value={this.password}
                onChange={this.handleChange}
                noValidate
              />
              {
                formErrors.password.length > 0 &&
                <ErrorMessage>
                  {formErrors.password}
                </ErrorMessage>
              }
            </FormGroup>
            <FormGroup>
              <Label for="newpassword">New Password</Label>
              <Input
                className={formErrors.newpassword.length > 0 ? "error": ""}
                type="password"
                id="newpassword"
                name="newpassword"
                value={this.newpassword}
                onChange={this.handleChange}
                noValidate
              />
              {
                formErrors.newpassword.length > 0 &&
                <ErrorMessage>
                  {formErrors.newpassword}
                </ErrorMessage>
              }
            </FormGroup>
            <FormGroup>
              <Label for="newpassword">Confirm Password</Label>
              <Input
                className={formErrors.confirmpassword.length > 0 ? "error": ""}
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                value={this.confirmpassword}
                onChange={this.handleChange}
                noValidate
              />
              {
                formErrors.confirmpassword.length > 0 &&
                <ErrorMessage>
                  {formErrors.confirmpassword}
                </ErrorMessage>
              }
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
};
export default connect(mapStateToProps, mapDispatchToProps)(AccountChange);
