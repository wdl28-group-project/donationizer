import React from "react";
import Categories from "../components/Categories";
import { connect } from "react-redux";
import Footer from "./Footer";
import { MdSearch } from "react-icons/md";
import {Link,Redirect} from 'react-router-dom';
import { getDonations, getDonationsdetail } from "../redux/reducers/donationReducer";

import './stylescomponent/Home.scss';
class Home extends React.Component {
  state = { search: "", user_id:0};
  componentDidMount() {
    let id = this.props.user.length !== 0 ? this.props.user.user_id : this.state.user_id; 
    // console.log(id)
    this.props.getDonations(id);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    // console.log(this.props)
    if(this.props.details.length>0){return <Redirect to="/donation-details"/>}
    // console.log(this.props.locations)
    const { search } = this.state;
    let mappedDonation = this.props.donations.map((el, i) => {
      return (
          <div
            key={el.donation_title + i}
            className="donation-card"
            onClick={()=>this.props.getDonationsdetail(el.donation_id)}

          >
            <img src={el.donation_photo} alt="donation" />
            <p>{el.donation_title}</p>
            <p>{el.post_location}</p>
          </div>
      );
    });
    let filteredDonation = this.props.donations
      .filter(el => {
        return el.donation_title.toLowerCase().includes(search.toLowerCase());
      })
      .map((el, i) => {
        return (
            <div
              key={el.donation_title + i}
              className="donation-card"
              style={{ border: "1px solid black"}}
              onClick={()=>this.props.getDonationsdetail(el.donation_id)}
            >
              <img src={el.donation_photo} alt="donation" />
              <div>
                <p>{el.donation_title}</p>
                <p>{el.post_location}</p>
              </div>
            </div>
        );
      });
    return (
      <div>
        <div className="search-container">
            <div className="search">
              <MdSearch size="25px"/>
              <input
                placeholder="search donations"
                id="input"
                name="search"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="donation-category-container">
        <Categories />
        <div className="donation-container">
          <div className="donation-card-container">
            {!search ? mappedDonation : filteredDonation && filteredDonation.length === 0 ? mappedDonation:filteredDonation}
          </div>
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    donations: reduxState.donation.donations,
    details: reduxState.donation.details,
    user: reduxState.authReducer.user
  };
};
export default connect(mapStateToProps, { getDonations,getDonationsdetail })(Home);