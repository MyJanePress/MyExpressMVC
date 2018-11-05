import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, 
        NavbarBrand, Nav, NavItem 
        } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return ( 
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Home</NavbarBrand>
                        <NavbarToggler onClick={this.props.onTogglerPress}></NavbarToggler>
                        <Collapse isOpen={this.props.toggle} navbar>
                            <Nav className="m1-auto" navbar>
                                <NavItem className='m-2'>
                                    <Link to='/login'>Log In</Link>
                                </NavItem>
                                <NavItem className='m-2'>
                                    <Link to='/signup'>Sing Up</Link>
                                </NavItem>
                                <NavItem className='m-2'>{
                                    this.props.userlogin === true ? (
                                        <Link to='/customer'>Customer</Link>
                                    ):(
                                        <Link to='/'>Customer</Link>
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

const mapStateToProps = (state) => {
    return {
        userlogin: state.userlogin,
        toggle:state.toggle
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTogglerPress: () => dispatch({type: 'COLLAPSED'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);