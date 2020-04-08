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
    if(!this.props.user.user_id) return <Redirect to='/' />
    return (
      <div className="profile">
        <Tabs defaultActiveKey='edit' id='profile-tabs'>
          <Tab eventKey='edit' title='Edit Profile'>
            <Edit />
          </Tab>
          <Tab eventKey='favorites' title='Favorited'>
            <Favorites />
          </Tab>
          <Tab eventKey='user-donations' title='My Donations'>
            <MyDonations user={this.props.user} />
          </Tab>
        </Tabs>
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