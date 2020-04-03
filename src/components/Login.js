import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link, withRouter } from 'react-router-dom';
import { loginUser, resetFields, updateState } from '../redux/reducers/authReducer';


function Login(props){
    function handleLogin(){
        let { username, password, loginUser } = props;
        loginUser(username, password)
        .catch( err => console.error(err) );
        console.log(username, password);
    }
    function handleChange(e){
        let { updateState } = props;
        updateState({[e.target.name]: e.target.value });
    }
    function handleKeyPress(e){
        if(e.key == 'Enter'){
            let { username, password } = props;
            if(username && password ){
                handleLogin();
            }
        }
    }

    if( props.user.user_id ) return <Redirect to='/' />

    return(
        <div>
            <div className='form login'>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    onChange={e => handleChange(e)}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={e => handleChange(e)}
                    onKeyPress={e => handleKeyPress(e)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
            <span>Don't have an account? <Link to='/register'>Register Here</Link></span>
        </div>
    )
}

const mapStateToProps = state => {
    let { user, username, password, loading } = state.authReducer;

    return{
        user,
        username,
        password,
        loading
    }
}

export default withRouter(
    connect( 
        mapStateToProps,
        {
            loginUser,
            resetFields,
            updateState
        } 
    )
    (Login)
);