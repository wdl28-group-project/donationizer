import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class LoggedOut extends Component{
    render(){
        return(
            <div>
                <nav className='loggedOut'>
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
                </nav>
            </div>
        )
    }
}

export default LoggedOut;