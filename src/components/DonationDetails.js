import React from "react";
import { connect } from "react-redux";
import { getDonations, getDonationsdetail} from "../redux/reducers/donationReducer";
import { Link, Redirect } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios"

class DonationDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     pics: [],
     currentIndex: 0,
     translateValue: 0
    }; 
  }

  componentDidMount() {
    axios.get(`/api/donation/${this.props.details.donation_id}/photos`)
    .then(res=>{ console.log(res)
        var url=[]
        for (var j=0; j<res.data.length; j++) {
            url.push(res.data[j].donation_photo);
            this.setState({pics: url})
        }
    })
    .catch(res=>{console.log(res)})
  }

  
  
  
  
  render() {
    const mappedPhotos =  this.state.pics.map((post, indx) => {
        console.log(post)
        return (
          <img
            key={indx}
            style={{ minheight: "10vh", maxHeight: "20vh" }}
            src={post}
            alt="Alt text"
          />
      );
    })
    const responsive = {
        desktop: {
          breakpoint: { max:3000, min:1100 },
          items: 3
        },
        tablet: {
          breakpoint: { max:1100, min: 690 },
          items: 3
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
          <div>

          DonationDetails
          <Carousel responsive={responsive} className="w-event-parent">
                {mappedPhotos}
            </Carousel>




            

          <h1>{this.props.details.donation_title}</h1>
          <h2>{this.props.details.category_name}</h2>
          <h3>{this.props.details.donation_desc}</h3>
          <p>{this.props.details.post_date}</p>
          <Link to="/">
            <button onClick={()=> this.props.getDonationsdetail()}>home</button>
          </Link>
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

export default connect(mapStateToProps, { getDonationsdetail, getDonations })(
  DonationDetails
);
