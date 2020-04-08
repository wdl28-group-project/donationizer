import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {MdAddAPhoto } from "react-icons/md";
class LoggedOut extends Component{
    render(){
        return(
            <div  className="header-container">
                <nav className='loggedOut'>
<<<<<<< HEAD
                    <ul className='menu'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to="/Post">post</Link>

                        </li>
                    </ul>
=======
                        <div>
                            <Link to='/' id="name">GIVE AWAY</Link>
                        </div>
                        <div className="loggedOutLinks">
                            <Link to="/Post"><MdAddAPhoto/> Give</Link>
                            <Link to='/login'>Login</Link>
                        </div>
>>>>>>> master
                </nav>
            </div>
        )
    }
}

export default LoggedOut;