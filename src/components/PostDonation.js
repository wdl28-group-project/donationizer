import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logoutUser , getUser} from '../redux/reducers/authReducer';
import { postDonation } from '../redux/reducers/donationReducer';
import axios from "axios"


 class PostDonation extends Component {
constructor(){
    super()
    this.state={
        donator_id:0,
        donation_title: "",
        donation_desc: "",
        post_location: "",
        view_count:0,
        isDonated: false,
        Category:0,
        post_date:""


    }
}

componentDidMount(){
    getUser()
}


post=()=>{
    console.log(this.state)
    this.props.postDonation(this.state)
}
handleInput = e => {
    this.setState({ [e.target.name]: e.target.value} )
}


    render() {
        return (
            <div>
                <h1>title</h1>
                <input onChange={this.handleInput} name="donation_title"></input>
                <h1>details</h1>
                <input onChange={this.handleInput} name="donation_desc"></input>
                <h1>location</h1>
                <input onChange={this.handleInput} name="post_location"></input>
            <div>
                <button onClick={()=>this.setState({Category:4})}>Home</button>
                <button onClick={()=>this.setState({Category:2})}>Clothing</button>
                <button onClick={()=>this.setState({Category:3})}>Electronics</button>
                <button onClick={()=>this.setState({Category:1})}>Furniture</button>
                <button onClick={()=>this.setState({Category:5})}>Education</button>
                <button onClick={()=>this.setState({Category:6})}>Sports & Games</button>
                <button onClick={()=>this.setState({Category:7})}>Movies & Music</button>
                <button onClick={()=>this.setState({Category:8})}>Baby & Child</button>
                <button onClick={()=>this.setState({Category:9})}>Other</button>
            </div>
            <button>Donate!</button>
                </div>
        )
    }
}
const mapStateToProps = state => {
    let { user, user_id,location } = state.authReducer;
    return{
        user,
        user_id,
        location
    }
}

export default connect(
        mapStateToProps,
        {
            
        }
    )

(PostDonation);