import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {MdAddAPhoto } from "react-icons/md";
class LoggedOut extends Component{
    render(){
        return(
            <div  className="header-container">
                <nav className='loggedOut'>
                        <div>
                            <Link to='/' id="name">GIVE AWAY</Link>
                        </div>
                        <div>
                            <Link to="/Post" id="share">Give <MdAddAPhoto/></Link>
                            <Link to='/login' id="login">Login</Link>
                        </div>
                </nav>
            </div>
        )
    }
}

export default LoggedOut;