import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdMessage,MdAddAPhoto } from 'react-icons/md';


class LoggedIn extends Component{
    handleLogOut = () => {
        let { logoutUser } = this.props;
        logoutUser();
    }
    render(){
        let { profile_pic } = this.props.user;
        console.log(profile_pic);
        return(
            <div  className="header-container">
                <nav className='loggedIn'>
                    <ul className='menu'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default LoggedIn;