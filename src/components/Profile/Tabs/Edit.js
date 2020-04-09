import React from "react";
import { connect } from "react-redux";
import { editUser } from "../../../redux/reducers/authReducer";
import Upload from '../../Cloudinary/Upload';
import axios from 'axios';
import "../../stylescomponent/Profile.scss";
require('dotenv').config();

class Edit extends React.Component {
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
      confirmPassword: "",
      profile_pic: ''
    };
  }
  componentDidMount(){
    let { profile_pic, username, location } = this.props.user;
    this.setState({ profile_pic, username, location })
  }
  //make state here to hold the inputs
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSaveUser = () => {
      const { username, location, profile_pic } = this.state
      if (username && location && profile_pic) {
        axios.put('/auth/editUser', {
            username,
            location,
            profile_pic
        })
        .then(() => {
            alert("successfully updated user")
        })
        .catch(() => {
            alert("try again")
        })
    } else {
      alert("not equal combo");
    }
  }

  // make method like handle input & handle click
  handleClick = () => {
    const { username, location, url } = this.state;

    this.props.editUser({ username, location, url });
  };

  handleNewPassword = (event) => {
    this.setState({ newPassword: event.target.value });
  };

  handleConfirmPassword = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };

  handleSavePassword = () => {
    const { newPassword, confirmPassword, currentPassword } = this.state;

    if (newPassword && confirmPassword && newPassword === confirmPassword) {
        axios.put('/auth/editPassword', {
            user: this.props.user,
            password: currentPassword,
            newPassword: newPassword
        })
        .then(() => {
            alert("successfully changed password")
        })
        .catch((res) => { 
            alert("server trouble -- try again")
            console.log(res)
        })
    } else {
      alert("not equal password");
    }
  };
  handleCloudinary = incomingUpdate => {
    let { image_url: profile_pic } = incomingUpdate;
    this.setState({ profile_pic });
  }

  render() {
    const { REACT_APP_CLOUDINARY_PROFILE } = process.env;
    let { profile_pic } = this.state;
    return (
      <div className="profile">
        <div className="profile-header">
          <img
            className='pointer' 
            src={ profile_pic ? profile_pic : 'https://res.cloudinary.com/dsbuphoeh/image/upload/v1586359587/Donationizer/01_w5jmbt.png' } alt='profile'
          />
          <Upload uploadDestination={ REACT_APP_CLOUDINARY_PROFILE } handleCloudinary={ this.handleCloudinary } />
        </div>
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
            <div className="button-wrapper">
              <button className="save-changes" onClick={this.handleSaveUser}>
                Save changes
              </button>
            </div>
          </div>
          <div className="passWord">
            <div className="change-password">Change Password</div>
            <div className="userName-text">Current Password</div>
            <input
              className="input-username"
              type="password"
              onChange={this.handleInput}
              name="currentPassword"
              placeholder="current password"
            />
            <div className="userName-text">New Password</div>
            <input
              className="input-username"
              type="password"
              onChange={this.handleNewPassword}
              name="newPassword"
              placeholder="new password"
            />
            <div className="userName-text">Confirm Password</div>
            <input
              className="input-username"
              type="password"
              onChange={this.handleConfirmPassword}
              name="confirmPassword"
              placeholder="confirm password"
            />
            <div className="button-wrapper">
              <button
                className="save-changes"
                onClick={this.handleSavePassword}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { user, username, password, loading, profile_pic } = state.authReducer;
  return {
    user,
    username,
    profile_pic,
    password,
    loading,
  };
};

export default connect(mapStateToProps, {
  editUser,
})(Edit);
