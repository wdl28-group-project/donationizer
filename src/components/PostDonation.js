import React, { Component } from "react";
import { connect } from "react-redux";
// import { getUser} from '../redux/reducers/authReducer';
import { postDonation } from "../redux/reducers/donationReducer";
// import axios from "axios"

class PostDonation extends Component {
  constructor() {
    super();
    this.state = {
      donator_id: 0,
      donation_title: "",
      donation_desc: "",
      post_location: "",
      view_count: 0,
      isdonated: false,
      category: 0,
      post_date: "",
      donation_id: 0,
      donation_photo: "",
      on:false
    };
  }
  getDateTime = () => {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length === 1) {
      month = "0" + month;
    }
    if (day.toString().length === 1) {
      day = "0" + day;
    }
    if (hour.toString().length === 1) {
      hour = "0" + hour;
    }
    if (minute.toString().length === 1) {
      minute = "0" + minute;
    }
    if (second.toString().length === 1) {
      second = "0" + second;
    }
    var dateTime =
      year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
    return dateTime;
  };

  componentDidMount() {
    if (this.props.user.length === 0) {
      return console.log();
    } else {
      // this.props.getUser(this.props.user_id)
      var newDate = this.getDateTime();
      this.setState({
        donator_id: this.props.user.user_id,
        post_location: this.props.user.location,
        post_date: `${newDate}`,
      });
    }
  }

  post = () => {
    console.log(this.state);
    console.log(this.props.user);
    this.props.postDonation(this.state);
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  plus=()=>{
      if(this.state.on === true){
      return "donate"
      
  } else{
     return "+"
  }
}
  
  render() {

    return (
      <div className="post-parent">
          <div className="post-parent-input">
        <h1>Title</h1>
        <input onChange={this.handleInput} name="donation_title"></input>
        <h1>Details</h1>
        <input onChange={this.handleInput} name="donation_desc"></input>
        <h1>Image URL</h1>
        <input onChange={this.handleInput} name="donation_photo"></input>
          </div>
        <div className="button-parent">
          <div className="product1">
            <div className="effect-2">
              <div
                className="content"
                onClick={() => this.setState({ category: 4 })}
              >
                Home
              </div>
            </div>
          </div>


          <div className="product2">
            <div className="effect-2">
              <div
                className="content"
                onClick={() => this.setState({ category: 2 })}
              >
                Clothing
              </div>
            </div>
          </div>

          <div className="product3">
            <div className="effect-2">
              <div
                className="content"
                onClick={() => this.setState({ category: 3 })}
              >
                Electronics
              </div>
            </div>
          </div>

          <div className="product4">
            <div className="effect-2">
              <div
                className="content"
                onClick={() => this.setState({ category: 1 })}
              >
                Furniture
              </div>
            </div>
          </div>

          <div className="product5">
            <div className="effect-2">
              <div
                className="content"
                onClick={() => this.setState({ category: 5 })}
              >
                Education
              </div>
            </div>
          </div>

          <div className="product6">
            <div className="effect-2">
              <div
                className="content"
                onClick={() => this.setState({ category: 6 })}
              >
                Sports & Games
              </div>
            </div>
          </div>

          <div className="product7">
            <div className="effect-2">
              <div
                className="content"
                onClick={() => this.setState({ category: 7 })}
              >
                Movies & Music
              </div>
            </div>
          </div>

          <div className="product8">
            <div className="effect-2">
              <div
                className="content"
                onClick={() => this.setState({ category: 8 })}
              >
                Baby & Child
              </div>
            </div>
          </div>

          <div className="product9">
            <div className="effect-2">
              <div
                cleassName="content"
                onClick={() => this.setState({ category: 9 })}
              >
                Other
              </div>
            </div>
            </div>
              <div className="product10">
                <div className="effect-2">
                  <div onClick={() => this.post()}
                  onMouseOver={() => this.setState({on: true})}
                  onMouseOut={() => this.setState({on: false})}
                  >
                    {this.plus()}
                    </div>
                </div>
          </div>
    </div>
</div>
    );
  }
}
const mapStateToProps = (state) => {
  let { user } = state.authReducer;
  return {
    user,
  };
};

export default connect(mapStateToProps, { postDonation })(PostDonation);
