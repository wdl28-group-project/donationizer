import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { getFavorites, getDonationsdetail } from '../../../redux/reducers/donationReducer';

class Favorites extends Component{
    componentDidMount(){
        let { user_id } = this.props.user,
            { getFavorites } = this.props;
        getFavorites( user_id );
    }
    render(){
        let mappedFavorites = this.props.favorites.map( (favorite, i) => {
            return (
                <div
                    key={favorite.donation_title + i}
                    className="donation-card"
                    style={{ border: "1px solid black"}}
                    onClick={()=>this.props.getDonationsdetail(favorite.donation_id)}
        
                >
                    <img src={favorite.donation_photo} alt="donation" />
                    <p>{favorite.donation_title}</p>
                    <p>{favorite.post_location}</p>
                </div>
            );
        } )

        if(this.props.details.length>0){return <Redirect to="/donation-details"/>}
        return(
            <div style={{ marginLeft:"10vw", display:"flex", flexDirection:"row"}}>{mappedFavorites}</div>
        )
    }
}


const mapStateToProps = state => {
    let { favorites, details } = state.donation,
        { user } = state.authReducer;
    return{
        favorites,
        details,
        user
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        {
            getFavorites,
            getDonationsdetail
        }
    )
    (Favorites)
);