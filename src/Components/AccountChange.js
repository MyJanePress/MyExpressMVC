import React, { Component } from 'react';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';
import { connect } from 'react-redux';
class AccountChange extends Component {
    // state = {  }
    constructor(props) {
        super(props);
        this.state = { userID: '', confirmpassword: '', newpassword: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const { userID, newpassword } = this.state;
        this.props.userInfoWatcher({ userID, newpassword });
        this.setState({ userID: '', confirmpassword: '', newpassword: '' });
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() { 
        return ( 
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <form className='form-horizontal' onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label
                                className='control-label com-md-2'>
                                User ID
                            </label>
                            <div className='col-md-10'>
                                <input
                                    type='text'
                                    id='userID'
                                    name='userID'
                                    placeholder='Enter Your new ID'
                                    value={this.userID}
                                    onChange={this.handleChange}>
                                </input>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label
                                className='control-label com-md-2'>
                                Confirm Password:
                            </label>
                            <div className='col-md-10'>
                                <input
                                    type='password'
                                    id='confirmpassword'
                                    name='confirmpassword'
                                    placeholder='Confirm Password'
                                    value={this.confirmpassword}
                                    onChange={this.handleChange}>
                                </input>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label
                                className='control-label com-md-2'>
                                New Password
                            </label>
                            <div className='col-md-10'>
                                <input
                                    type='password'
                                    id='newpassword'
                                    name='newpassword'
                                    placeholder='Enter New Password'
                                    value={this.newpassword}
                                    onChange={this.handleChange}>
                                </input>
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='col-md-offset-2'>
                                <button
                                    type='submit'
                                    className='btn btn-default'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AccountChange);