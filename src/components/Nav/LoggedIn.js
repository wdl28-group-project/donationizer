import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoggedIn extends Component{
    handleLogOut = () => {
        let { logoutUser } = this.props;
        logoutUser();
    }
    render(){
        return(
            <div  className="header-container">
                <nav className='loggedIn'>
                    <ul className='menu'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to="/Post">post</Link>

                        </li>
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                    </ul>
                </nav>
                <button onClick={this.handleLogOut}>Log Out</button>
            </div>
        )
    }
}

export default LoggedIn;