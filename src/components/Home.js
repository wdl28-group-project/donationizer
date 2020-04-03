import React from "react";
import Categories from "../components/Categories";
import {connect} from 'react-redux';
import { getDonations, getDonationsdetail } from "../redux/reducers/donationReducer";
import {Link, Redirect} from "react-router-dom"

class Home extends React.Component {
  componentDidMount() {
    this.props.getDonations();
  }
  render() {
    const mappedDonation= this.props.donations.map(el=>{
        return(
          // <Link to="/donation-details" id={el.donation_id}>
            <div 
            onClick={()=>this.props.getDonationsdetail(el.donation_id)}
             key={el.donation_id} 
             style={{'border':'1px solid black','width':'40vw'}}>
                <p>{el.donation_title}</p>
                <p>{el.post_location}</p>
                <img src={el.donation_photo} width="200px"/>
            </div>
          // </Link>
        )

    })
// a rederect if there is a product detail in redux state
if(this.props.details.length>0){return <Redirect to="/donation-details"/>}
    return (
      <div>
        <h3>Home Component</h3>
        <Link to="/profile"><button>Profile</button></Link>
        {mappedDonation}
        <Categories />
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    donations: reduxState.donation.donations,
    details: reduxState.donation.details

  };
};

export default connect(mapStateToProps, { getDonations,getDonationsdetail })(Home);
