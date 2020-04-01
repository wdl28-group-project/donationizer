import React from 'react';
import Categories from '../components/Categories';
import { connect } from 'react-redux';
import { getDonations } from '../redux/reducers/donationReducer';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  componentDidMount() {
    this.props.getDonations();
  }
  render() {
    const mappedDonation = this.props.donations.map(el => {
      return (
        <div
          key={el.donation_id}
          style={{ border: '1px solid black', width: '40vw' }}
        >
          <p>{el.donation_title}</p>
          <p>{el.post_location}</p>
          <img src={el.donation_photo} width='200px' />
        </div>
      );
    });
    console.log(this.props.donations);
    return (
      <div>
        <h3>Home Component</h3>
        <Link to='/chat'>
          <button>Chat</button>
        </Link>
        {mappedDonation}
        <Categories />
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
