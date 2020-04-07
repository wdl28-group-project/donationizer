import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editUser } from "../../../redux/reducers/authReducer";

class Edit extends Component{
    constructor() {
        // let { username, password, loginUser } = props;
        super();
        this.state = {
            username: "",
            location: "",
            url: "",
            password: "",
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
        };
    }
    
    //make state here to hold the inputs
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // make method like handle input & handle click
    handleClick = () => {
        const { username, location, url } = this.state;

        this.props.editUser({ username, location, url });
    };
    render(){
        return(
            <div className='edit wrap'>
                <div className="profile-header">Tap on photo to change it</div>
                <div className="profile-content">
                    <div className="userName">
                        <div className="userName-text">New Username</div>
                        <input
                        className="input-username"
                        onChange={this.handleInput}
                        name="username"
                        placeholder="new username"
                        />
                        <div className="userName-text">New Location</div>
                        <input
                        className="input-username"
                        onChange={this.handleInput}
                        name="location"
                        placeholder="new location"
                        />
                        <div className="userName-text">URL</div>
                        <input className="input-username" onChange={this.handleInput} name="url" placeholder="paste image URL" />
                        <div className="button-wrapper">
                        <button className="save-changes" onClick={this.handleUserName}>Save changes</button>
                        </div>

                    </div>
                    <div className="passWord">
                        <div className="change-password">Change Password</div>
                        <div className="userName-text">Current Password</div>
                        <input
                        className="input-username"
                        onChange={this.handleInput}
                        name="current-password"
                        placeholder="current password"
                        />
                        <div className="userName-text">New Password</div>
                        <input
                        className="input-username"
                        onChange={this.handleInput}
                        name="new-password"
                        placeholder="new password"
                        />
                        <div className="userName-text">Confirm Password</div>
                        <input
                        className="input-username"
                        onChange={this.handleInput}
                        name="confirm-password"
                        placeholder="confirm password"
                        />
                        <div className="button-wrapper">
                        <button className="save-changes" onClick={this.handlePassword}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {
    editUser,
})(Edit);