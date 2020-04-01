import React from 'react';
import axios from 'axios';
class Categories extends React.Component{
    state={
        // categories: ['Housing','Clothing','Electronics','Home & Garden','Education','Sports & Games','Movies & Music','Baby & Child','Other'],
        donations:[]
    }
  
    selectCategory=(category)=>{
        console.log(category)
        axios.get(`/api/donations/category?category=${category}`).then(res=>{
            console.log(res.data)
            // this.setState({donations:res.data})
            
        }); 
    
    }

    
    // filterCategory=()=>{
    //     axios.get(`/api/donations/category?category=Housing`).then(res=>{
    //         console.log(res.data)
    //     })
    // }
    render(){
        console.log(this.state.donations)
        // const mappedDonations = this.state.donations.map(el=>{
        //     return(
        //         <div>
        //             <p>{el.title}</p>
        //             {/* <p>{el.t}</p> */}
        //         </div>
        //     )
        // })
        return(
            <div>
                <p onClick={()=>this.selectCategory('Housing')} name="Housing">Housing</p>
                <p onClick={()=>this.selectCategory('Clothing')} name="Clothing">Clothing</p>
                <p onClick={()=>this.selectCategory('Electronics')} name="Electronics">Electronics</p>
                <p onClick={()=>this.selectCategory('Home & Garden')} name="Home & Garden">Home & Garden</p>
                <p onClick={()=>this.selectCategory('Education')} name="Education">Education</p>
                <p onClick={()=>this.selectCategory('Sports & Games')} name="Sports & Games">Sports & Games</p>
                <p onClick={()=>this.selectCategory('Movies')} name="Movies">Movies & Music</p>
                <p onClick={()=>this.selectCategory('Baby & Child')} name="Baby & Child">Baby & Child</p>
                <p onClick={()=>this.selectCategory('Other')} name="Other">Other</p>
            </div>

        )
    }
}
export default Categories;