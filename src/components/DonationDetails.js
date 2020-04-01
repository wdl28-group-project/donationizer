import React from 'react';
class DonationDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            product_id: this.props.donation_id
        }
    }
    render(){
 console.log(this.state.product_id)

        return(
            <div>DonationDetails</div>
        )
    }
}
export default DonationDetails;