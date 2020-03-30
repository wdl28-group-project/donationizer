
module.exports={

postDonation: function (req, res){
    const db = req.app.get('db')        
    const donator_id = req.session.user.users_id
    const {donation_title, donation_desc, post_location, view_count, isdonated, category} = req.body
    console.log(dateofevent)
    db.donations.postDonation(donator_id, donation_title, donation_desc, post_location, view_count, isdonated, category)
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
        const donation_id = req.params.donation_id
        console.log(donation_id)
        db.donations.deleteDonation(donation_id)
    .then(response =>{
        console.log(`product ${response} has been delete`)
        res.sendStatus(200)
    })
    .catch(error=>{
        console.log(error)
        res.status(409).json("you messed up")
    })
},
updateViewCount: function (req, res) {
    const db = req.app.get('db');
    const donation_id = req.params.donation_id
   const { view_count} = req.body;
    
   db.events.postDonation( view_count, donation_id)
        .then(put =>{
            console.log(`view count hav changed to ${put}`)
            res.sendStatus(200)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json("internal server error")
        })
},
getDonation: function (req, res){
    const db = req.app.get('db')
    const donation_id = req.params.donation_id
    db.events.getAllEvents(donation_id)
        .then((respond) => {
            res.status(200).send(respond)
        })
        .catch(error=>{
            console.error(error)
            res.sendStatus(500)
        })
},

getDonations: function (req, res){
    const db = req.app.get('db')
    db.events.getDonations()
        .then((respond) => {
            res.status(200).send(respond)
        })
        .catch(error=>{
            console.error(error)
            res.sendStatus(500)
        })
}
}