import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logoutUser } from '../redux/reducers/authReducer';


 class PostDonation extends Component {
constructor(){
    super()
    this.state={
        Category:0

    }
}


    render() {
        return (
            <div>
                <h1>title</h1>
                <input name="donation_title"></input>
                <h1>details</h1>
                <input name="donation_desc"></input>
                <h1>location</h1>
                <input name="post_location"></input>
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
                </div>
        )
    }
}
const mapStateToProps = state => {
    let { user } = state.authReducer;
    return{
        user
    }
}

export default connect(
        mapStateToProps,
        {
            logoutUser
        }
    )

(PostDonation);