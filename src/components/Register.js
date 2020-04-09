import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link, withRouter } from 'react-router-dom';
import { updateState, registerUser, resetFields } from '../redux/reducers/authReducer';

class Register extends Component{
    handleChange = e => {
        let { updateState } = this.props;
        updateState({ [e.target.name]: e.target.value });
    }
    handleRegister = () => {
        let { registerUser, username, password, location } = this.props;
        registerUser( username, password, location );
    }
    render(){

        if( this.props.user.user_id ) return <Redirect to='/' />

        return(
            <div>
                <div className='form login'>
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        onChange={e => this.handleChange(e)}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        onChange={e => this.handleChange(e)}
                    />
                    <input
                        type='text'
                        name='location'
                        placeholder='Location (E.g. Dallas, TX)'
                        onChange={e => this.handleChange(e)}
                    />
                    <button onClick={this.handleRegister}>Register</button>
                </div>
                <span>Already have an account? <Link to='/login'>Login Here</Link></span>
            </div>
        )
    }
}

const mapStateToProps = state => {
    let { user, username, password, location } = state.authReducer;
    return{
        user,
        username,
        password,
        location
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        {
            updateState,
            registerUser,
            resetFields
        }
    )
    (Register)
);