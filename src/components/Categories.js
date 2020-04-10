import React from 'react';
import {connect} from 'react-redux';
import { getDonationsByCategory,getDonations } from "../redux/reducers/donationReducer";
import {FaTshirt,FaBasketballBall,FaHeadphonesAlt,FaBabyCarriage} from 'react-icons/fa';
import {MdComputer} from 'react-icons/md';
import {GoHome,GoTools} from 'react-icons/go';
import {GiSofa,GiWhiteBook,GiWorld} from 'react-icons/gi';


class Categories extends React.Component{ 
    state = {user_id:0};
    selectCategory=(category)=>{
        // console.log(category);
        this.props.getDonationsByCategory(category).then(res=>{
            let id = this.props.user.length !== 0 ? this.props.user.user_id : this.state.user_id; 
            if(this.props.donations.length === 0){
                return(
                 this.props.getDonations(id)
                )
            }
        })
    }
    
    render(){
        // console.log(this.props.donations)
        return(
            <div className="category-container">
                <div className="icon-container" onClick={()=>this.selectCategory('All')}>
                    <GiWorld name="all" className="icon"/>
                    <p>All</p>
                </div>                
                <div className="icon-container" data-test-id="categor-button" onClick={()=>this.selectCategory('Furniture')}>
                    <GiSofa name="Furniture" className="icon"/>
                    <p data-test-id="categor-text">Furniture</p>
                </div>                
                <div className="icon-container" data-test-id="category-button" onClick={()=>this.selectCategory('Clothing')}>
                    <FaTshirt name="Clothing" className="icon"/>
                    <p>Clothing</p> 
                </div>
                <div className="icon-container" data-test-id="category-button" onClick={()=>this.selectCategory('Electronics')}>
                    <MdComputer name="Electronics" className="icon"/>
                    <p>Electronics</p>
                </div>
                <div className="icon-container" data-test-id="category-button" onClick={()=>this.selectCategory('Home')}>
                    <GoHome name="Home&Garden" className="icon"/>
                    <p>Home & Garden</p>
                </div>
                <div className="icon-container" data-test-id="category-button" onClick={()=>this.selectCategory('Education')}>
                    <GiWhiteBook name="Education" className="icon" />
                    <p>Education</p>
                </div>
                <div className="icon-container" data-test-id="category-button" onClick={()=>this.selectCategory('Sports')}>
                    <FaBasketballBall name="Sports&Games" className="icon"/>
                    <p>Sports & Games</p>
                </div>
                <div className="icon-container" data-test-id="category-button" onClick={()=>this.selectCategory('Movies')}>
                    <FaHeadphonesAlt name="Movies" className="icon"/>
                    <p>Movies & Music</p>
                </div>
                <div className="icon-container" data-test-id="category-button" onClick={()=>this.selectCategory('Baby')}>
                    <FaBabyCarriage name="Baby&Child" className="icon"/>
                    <p>Baby & Child</p>
                </div>
                <div className="icon-container" data-test-id="category-button" onClick={()=>this.selectCategory('Other')}>
                    <GoTools name="Other" className="icon"/>
                    <p>Other</p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = reduxState => {
    return {
      donations: reduxState.donation.donations,
      user: reduxState.authReducer.user
      

    };
  };
  
  export default connect(mapStateToProps, { getDonationsByCategory,getDonations })(Categories);
  