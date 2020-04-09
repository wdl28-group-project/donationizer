import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUser} from '../redux/reducers/authReducer';
import { postDonation } from '../redux/reducers/donationReducer';
import Upload from './Cloudinary/Upload';
import axios from "axios"
require('dotenv').config();


 class PostDonation extends Component {
constructor(){
    super()
    this.state={
        donator_id:0,
        donation_title: "",
        donation_desc: "",
        post_location: "",
        view_count:0,
        isdonated: false,
        category:0,
        post_date:"",
        donation_photo: ""

    }
}

componentDidMount(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    this.setState({  
        post_date: dateTime,
        donator_id: this.props.user.user_id,
        post_location: this.props.user.location})
}


post=()=>{
    console.log(this.state)
    this.props.postDonation(this.state)
}
handleInput = e => {
    this.setState({ [e.target.name]: e.target.value} )
}

    handleCloudinary = incomingUpdate => {
        let { image_url: donation_photo } = incomingUpdate;
        this.setState({ donation_photo });
    }
    render() {
        const { REACT_APP_CLOUDINARY_DONATION } = process.env;
        return (
            <div className="post-parent">
                <h1>Donation Title</h1>
                <input onChange={this.handleInput} name="donation_title"></input>
                <h1>Product Description</h1>
                <input onChange={this.handleInput} name="donation_desc"></input>
                <h1>Image url</h1>
                <Upload uploadDestination={ REACT_APP_CLOUDINARY_DONATION } handleCloudinary={ this.handleCloudinary } />
            <div className="button-parent">
                <div className={`${this.state.category=== 4?"ham":"dud" }`} onClick={()=>this.setState({category:4})}>Home</div>
                <div className={`${this.state.category=== 2?"ham":"dud" }`} onClick={()=>this.setState({category:2})}>Clothing</div>
                <div className={`${this.state.category=== 3?"ham":"dud" }`} onClick={()=>this.setState({category:3})}>Electronics</div>
                <div data-testid="ham" className={`${this.state.category=== 1?"ham":"dud" }`} onClick={()=>this.setState({category:1})}>Furniture</div>
                <div className={`${this.state.category=== 5?"ham":"dud" }`} onClick={()=>this.setState({category:5})}>Education</div>
                <div className={`${this.state.category=== 6?"ham":"dud" }`} onClick={()=>this.setState({category:6})}>Sports & Games</div>
                <div className={`${this.state.category=== 7?"ham":"dud" }`} onClick={()=>this.setState({category:7})}>Movies & Music</div>
                <div className={`${this.state.category=== 8?"ham":"dud" }`} onClick={()=>this.setState({category:8})}>Baby & Child</div>
                <div className={`${this.state.category=== 9?"ham":"dud" }`} onClick={()=>this.setState({category:9})}>Other</div>
            <div onClick={()=>this.post()}>Donate!</div>
            </div>
                </div>
        )
    }
}
const mapStateToProps = state => {
    let { user, user_id, location } = state.authReducer;
    return{
        user,
        user_id,
        location
    }
}

export default connect(
        mapStateToProps,
        {
            getUser,
            postDonation
        }
    )

(PostDonation);