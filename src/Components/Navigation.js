import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="m1-auto" navbar>
              {
                <NavItem className="m-2">
                  <Button type="button">
                    {
                    this.props.userlogin === true
                      ? (
                        <Link
                          to="/"
                          className="nav_link"
                          onClick={this.props.logoutWatcher}
                        >
                          <span>Log Out</span>
                        </Link>
                      ) : (
                        <Link
                          to="/login"
                          className="nav_link"
                        >
                          <span>Log In</span>
                        </Link>
                      )
                    }
                  </Button>
                </NavItem>
                            }
              <NavItem className="m-2">
                <Button type="button">
                  <Link to="/signup" className="nav_link">
                                        Sign Up
                  </Link>
                </Button>
              </NavItem>
              <NavItem className="m-2">
                {
                this.props.token ? (
                  <Button
                    type="button"
                    onClick={this.props.userAccessWatcher}
                  >
                    <Link to="/customer" className="nav_link">
                                        Customer
                    </Link>
                  </Button>
                ) : (
                  <Button type="button">
                    <Link to="/customer" className="nav_link">
                                        Customer
                    </Link>
                  </Button>
                )
              }
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
