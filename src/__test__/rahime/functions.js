import axios from 'axios';

module.exports ={
    getDonationInfo: async (id) =>{
        const donation = await axios.get(`/api/donation/${id}`)
        return donation
    }
}
