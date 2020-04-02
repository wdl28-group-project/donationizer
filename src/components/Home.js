import React from "react";
import Categories from "../components/Categories";
import { connect } from "react-redux";
import { getDonations } from "../redux/reducers/donationReducer";
import Header from "./Header";
import Footer from "./Footer";
import { MdSearch } from "react-icons/md";
import {Link} from 'react-router-dom';

class Home extends React.Component {
  state = { search: "" };
  componentDidMount() {
    this.props.getDonations();
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.props.locations)
    const { search } = this.state;
    let mappedDonation = this.props.donations.map((el, i) => {
      return (
        <Link to="/donation-details">
          <div
            key={el.donation_title + i}
            className="donation-card"
            style={{ border: "1px solid black", width: "40vw" }}
          >
            <img src={el.donation_photo} alt="donation" width="200px" />
            <p>{el.donation_title}</p>
            <p>{el.post_location}</p>
          </div>
        </Link>
      );
    });
    let filteredDonation = this.props.donations
      .filter(el => {
        return el.donation_title.toLowerCase().includes(search.toLowerCase());
      })
      .map((el, i) => {
        return (
          <Link to="/donation-details">
            <div
              key={el.donation_title + i}
              className="donation-card"
              style={{ border: "1px solid black", width: "40vw" }}
            >
              <img src={el.donation_photo} alt="donation" width="200px" />
              <div>
                <p>{el.donation_title}</p>
                <p>{el.post_location}</p>
              </div>
            </div>
          </Link>
        );
      });
    return (
      <div className="parent-container">
        <Header />
        <Categories />
        <div className="donation-container">
          <div className="search-container">
            <div className="search">
              <MdSearch size="25px" />
              <input
                placeholder="search donations"
                id="input"
                name="search"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="donation-card-container">
            {!search ? mappedDonation : filteredDonation}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    donations: reduxState.donation.donations
  };
};

export default connect(mapStateToProps, { getDonations })(Home);
