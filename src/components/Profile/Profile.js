import React from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import "../stylescomponent/Profile.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Edit from './Tabs/Edit';
import MyDonations from './Tabs/MyDonations';
import Favorites from './Tabs/Favorites';

class Profile extends React.Component {

  render() {
    let {username,profile_pic,location,donation_count} = this.props.user;
    console.log(this.props.user)
    if(!this.props.user.user_id) return <Redirect to='/' />
    return (
      <div className="profile-container">
        <div className="user-info">
          <img src={profile_pic? profile_pic : 'https://www.fillmurray.com/400/300'} style={{width:"200px"}}/>
          <div>
          <p>{username}</p>
          <p>{location}</p>
          <p>Donation Count: {donation_count}</p>
          </div>
        </div>

      <div className="profile">
        <Tabs defaultActiveKey='edit' id='profile-tabs'>
          <Tab eventKey='edit' title='Edit Profile'>
            <Edit />
          </Tab>
          <Tab eventKey='favorites' title='Favorited'>
            <Favorites />
          </Tab>
          <Tab eventKey='user-donations' title='My Donations'>
            <MyDonations />
          </Tab>
        </Tabs>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    let { user } = state.authReducer;
    return{
        user
    }
}

export default connect(mapStateToProps)(Profile);