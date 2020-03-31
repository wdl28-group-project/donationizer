
module.exports={
    getDonations:async(req, res)=>{
        const db = req.app.get('db')
        const donations = await db.donations.getDonations();
        res.status(200).json(donations)
    },
    getDonationByCategory:async (req,res)=>{
        const db = req.app.get('db');
        const {category} = req.query;
        // console.log(category)
        const donationsByCategory = await db.donations.getDonationsByCategory(category);
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
    getDonationPhotos: async (req,res)=>{
        const db = req.app.get('db');
        const donation_id = +req.params.id;
        const donationPhotos = await db.donations.getDonationPhotos(donation_id);
        res.status(200).json(donationPhotos);
        // console.log(donationPhotos);
    },
    getDonationInfo: async (req,res)=>{
        const db = req.app.get('db');
        const donation_id = +req.params.id;
        const donationInfo = await db.donations.getDonationInfo(donation_id);
        res.status(200).json(donationInfo);
        // console.log(donationInfo);
    }
}