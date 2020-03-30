module.exports={
    getDonationByCategory:async (req,res)=>{
        const db = req.app.get('db');
        const {category_name} = req.query;
        const donationsByCategory = await db.donations.getDonationsByCategory(category_name);
        res.status(200).json(donationsByCategory);
        // console.log(donationsByCategory);
    },
    getFilteredDonations:async(req,res)=>{
        const db =req.app.get('db');
        const {title} = req.query;
        const filteredDonations = await db.donations.getDonationsBySearch(title);
        res.status(200).json(filteredDonations);
        // console.log(filteredDonations)
    },
}