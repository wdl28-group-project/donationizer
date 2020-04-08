import React from "react";
import { connect } from "react-redux";
import { getDonations, getDonationsdetail, updateViewCount} from "../redux/reducers/donationReducer";
import { Link, Redirect } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./stylescomponent/Slider.scss"
import axios from "axios";
import {IoMdEye, IoIosHeart, IoMdMail } from "react-icons/io";


class DonationDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     pics: []
   
    }; 
  }

  componentDidMount() {
  if(this.props.detail.length === 0){ return console.log()} else if(this.props.detail.length>0){  
    updateViewCount(this.props.details.donation_id) 
    axios.get(`/api/donation/${this.props.details.donation_id}/photos`)
    .then(res=>{ console.log(res)
        var url=[]
        for (var j=0; j<res.data.length; j++) {
          if (url.includes(res.data[j].donation_photo) === false){
            url.push(res.data[j].donation_photo);}
            this.setState({pics: url})
        }
    })
    .catch(res=>{console.log(res)})
  }}

  

  render() {
    const mappedPhotos =  this.state.pics.map((post, indx) => {
        return (
            <img
              style={{ minheight: "100vh", maxHeight: "100vh", minWidth: "50vw", maxWidth: "60vw" }}
              src={post}
              alt="Alt text"
              className="w-event-image-container"
            />
      );
    })
    const responsive = {
        desktop: {
          breakpoint: { max:3000, min:1100 },
          items: 1
        },
        tablet: {
          breakpoint: { max:1100, min: 690 },
          items: 1
        },
        phone:{
          breakpoint: { max:690, min:405 },
          items: 1
        },
        xphone:{
          breakpoint: { max:405, min:0 },
          items: 1
        }
    
      };

      

    if (this.props.detail.length === 0) {
      return <Redirect to="/" />;
    } else if (this.props.detail.length > 0) {
      return (
          <div className="donationDetail-parent" >

          DonationDetails
          <Carousel responsive={responsive} className="w-event-parent">
                {mappedPhotos}
            </Carousel>
          <div>
            <div className="icon-d">
              {this.props.details.view_count}
              <IoMdEye></IoMdEye>
            </div>
            <div className="icon-d">
            <IoIosHeart></IoIosHeart>
            </div>
            <div className="icon-d">
            <IoMdMail></IoMdMail>
            </div>
          </div >
          <h1 className="info">{this.props.details.donation_title}</h1>
          <h2 className="info">{this.props.details.category_name}</h2>
          <h3 className="info">{this.props.details.donation_desc}</h3>
          <p className="info">{this.props.details.post_date}</p>
        </div>
      );
    }
  }
}
const mapStateToProps = reduxState => {
  return {
    donations: reduxState.donation.donations,
    details: reduxState.donation.details[0],
    detail: reduxState.donation.details,
    loading: reduxState.donation.loading
  };
};

export default connect(mapStateToProps, { getDonationsdetail, getDonations, updateViewCount })(
  DonationDetails
);