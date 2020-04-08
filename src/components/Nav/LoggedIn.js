import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdMessage,MdAddAPhoto } from 'react-icons/md';


class LoggedIn extends Component{
    handleLogOut = () => {
        let { logoutUser } = this.props;
        logoutUser();
    }
    render(){
        return(
            <div  className="header-container">
                <nav className='loggedIn'>
                        <div>
                            <Link to='/' id="name">GIVE AWAY</Link>
                        </div>
                        <div className="loggedInLinks">
                            <Link to="/Post"><MdAddAPhoto/> Give</Link>
                            <Link to='/chat' ><MdMessage size="23px" id="chat"/></Link>
                            <Link to='/profile'>Profile</Link>
                            <a onClick={this.handleLogOut}>Log out</a>
                        </div>
                </nav>
            </div>
        )
    }
}

export default LoggedIn;