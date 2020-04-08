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
                        <div>
                            <Link to="/Post" id="share"><button>Give <MdAddAPhoto/></button></Link>
                            <Link to='/profile'><MdMessage/></Link>
                            <Link to='/profile'>Profile</Link>
                        </div>
                </nav>
                <button onClick={this.handleLogOut}>Log Out</button>
            </div>
        )
    }
}

export default LoggedIn;