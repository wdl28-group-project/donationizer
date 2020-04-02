
module.exports={
getDonations:async(req, res)=>{
        const db = req.app.get('db')
        const donations = await db.donations.getDonations();
        res.status(200).json(donations)
},

postDonation: function (req, res){
    const db = req.app.get('db')        
    const {donation_title, donation_desc, post_location,post_date, view_count, isdonated, category, donator_id} = req.body
    db.donations.postDonation(donator_id, donation_title, donation_desc, post_location, view_count, isdonated, category,post_date)
        .then(post =>{
            console.log(post)
            res.sendStatus(200)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json("internal server error")
        })
},

deleteDonation:  function (req, res) {
    const db = req.app.get('db')
        const donation_id = +req.params.id
        console.log(donation_id)
        db.donations.deleteDonation(donation_id)
    .then(response =>{
        console.log(donation_id)
        res.sendStatus(200)
    })
    .catch(error=>{
        console.log(error)
        res.status(409).json("you messed up")
    })
},
updateViewCount: function (req, res) {
    const db = req.app.get('db');
    const donation_id = +req.params.id
   const { view_count} = req.body;
    
   db.donations.updateViewCount(donation_id, view_count)
        .then(put =>{
            console.log(`view count hav changed to ${put}`)
            res.sendStatus(200)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json("something is wrong")
        })
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