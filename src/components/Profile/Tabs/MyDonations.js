import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { getUserDonations, getDonationsdetail } from '../../../redux/reducers/donationReducer';

class MyDonations extends Component{
    componentDidMount(){
        let { user_id } = this.props.user,
            { getUserDonations } = this.props;
            getUserDonations( user_id );
    }
    render(){
        let mappedMyDonations = this.props.myDonations.map( (donation, i) => {
            return (
                <div
                    key={donation.donation_title + i}
                    className="donation-card"
                    style={{ border: "1px solid black"}}
                    onClick={()=>this.props.getDonationsdetail(donation.donation_id)}
        
                >
                    <img src={donation.donation_photo} alt="donation" />
                    <p>{donation.donation_title}</p>
                    <p>{donation.post_location}</p>
                </div>
            );
        } )

        if(this.props.details.length>0){return <Redirect to="/donation-details"/>}
        return(
            <div>{mappedMyDonations}</div>
        )
    }
}


const mapStateToProps = state => {
    let { myDonations, details } = state.donation,
        { user } = state.authReducer;
    return{
        myDonations,
        details,
        user
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        {
            getUserDonations,
            getDonationsdetail
        }
    )
    (MyDonations)
);