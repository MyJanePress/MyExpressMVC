import React, { Component } from 'react';
import { connect } from 'react-redux';

export const mapStateToProps = (state) => {
    return {
        userlogin: state.userlogin,
        toggle:state.toggle
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onLogIn: () => dispatch({ type: 'LOG_IN' }),
        onLogOut: () => dispatch({type: 'LOG_OUT'}),
        onTogglerPress: () => dispatch({ type: 'COLLAPSED' }),
    }
}
