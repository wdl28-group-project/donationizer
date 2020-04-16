import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdMessage,MdAddAPhoto } from 'react-icons/md';
import Layout from '../Chat/Layout';


class LoggedIn extends Component{
    constructor(){
        super();
        this.state = {
            showChat: false
        }
    }
    handleLogOut = () => {
        let { logoutUser } = this.props;
        logoutUser();
    }
    toggleChat = () => {
        let { showChat } = this.state;
        this.setState({ showChat: !showChat });
    }
    render(){
        let { profile_pic } = this.props.user,
            { showChat } = this.state;
        return(
            <div  className="header-container">
                <nav className='loggedIn'>
                        <div>
                            <Link to='/' id="name">GIFT AWAY</Link>
                        </div>
                        <div className="loggedInLinks">
                            <Link to="/Post"><MdAddAPhoto/> Give</Link>
                            <MdMessage onClick={this.toggleChat} size="23px" id="chat"/>
                            <Link to='/profile'>
                                <div
                                    className='profile-pic pointer'
                                    style={{ backgroundImage: `url(${ profile_pic ? profile_pic : 'https://www.fillmurray.com/400/300' })` }}
                                >
                                </div>
                            </Link>
                            <a onClick={this.handleLogOut}>Log out</a>
                        </div>
                </nav>
                { showChat ? <Layout /> : null }
            </div>
        )
    }
}

export default LoggedIn;