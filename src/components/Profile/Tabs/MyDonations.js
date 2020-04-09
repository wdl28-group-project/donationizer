import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { getUserDonations, getDonationsdetail } from '../../../redux/reducers/donationReducer';
import { IoMdEye, IoIosHeart, IoMdMail } from 'react-icons/io';
import axios from 'axios';

class MyDonations extends Component{
    componentDidMount(){
        let { user_id } = this.props.user,
        { getUserDonations } = this.props;
        getUserDonations( user_id );
    }
    deleteDonation=(id)=>{
        axios.delete(`api/donation/${id}`)        
    }
    componentDidUpdate(prevState){
        if(prevState !== this.props.myDonations){
            return this.props.getUserDonations(this.props.user.user_id );
        }
    }
    render(){
        let mappedMyDonations = this.props.myDonations.map( (donation, i) => {
            return (
                <div
                    key={donation.donation_title + i}
                    className="donation-card"
                    style={{ border: "1px solid black"}}
                    

                >
                    <img src={donation.donation_photo} alt="donation" onClick={()=>this.props.getDonationsdetail(donation.donation_id)}/>
                    <p>{donation.donation_title}</p>
                    <p>{donation.post_location}</p>
                    <p>
                    <IoMdEye></IoMdEye>
                    {donation.view_count}
                    </p>
                    <button data-testid="button" className="donation-button" onClick={()=>this.deleteDonation(donation.donation_id)}>Delete</button>
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