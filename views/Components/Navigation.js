import React, { Component } from 'react';
import {
        Collapse,
        Navbar,
        NavbarToggler, 
        NavbarBrand,
        Nav,
        NavItem, 
        Button
        } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter, Link} from 'react-router-dom';
import '../styles/Navigation';

class Navigation extends Component {
    render() {
        return ( 
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <NavbarToggler onClick={this.props.onTogglerPress}>
                    </NavbarToggler>
                    <Collapse isOpen={this.props.toggle} navbar>
                        <Nav className="m1-auto" navbar>{
                            <NavItem className='m-2'>
                                <Button type='button'>{
                                    withRouter(
                                        ({ history }) =>
                                            this.props.userlogin === true ?
                                            (
                                                <Link to='/' className='nav_link'
                                                    onClick={this.props.onLogOut}>
                                                    <span>Log Out</span>
                                                </Link>
                                            ) : (
                                                <Link to='/login'
                                                    className='nav_link'>
                                                    <span>Log In</span>
                                                </Link>
                                            )
                                    )
                                }
                                </Button>
                            </NavItem>
                            }
                            <NavItem className='m-2'>
                                <Button type='button'>
                                    <Link to='/signup' className='nav_link'>
                                        Sign Up</Link>
                                </Button>
                            </NavItem>
                            <NavItem className='m-2'>
                                <Button type='button'>
                                    <Link to='/customer' className='nav_link'>Customer</Link>
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('User Login',state.userlogin);
    return {
        userlogin: state.userlogin,
        toggle:state.toggle
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTogglerPress: () => dispatch({ type: 'COLLAPSED' }),
        onLogOut: () => dispatch({type: 'LOG_OUT'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);