require('dotenv').config();
let { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const express = require('express');
const app = express();
const massive = require('massive');

app.use(express.json());

app.listen( SERVER_PORT, () => console.log('Party on, Wayne!') );

massive(CONNECTION_STRING)
.then( db => {
    console.log('Excellent');
    app.set('db', db);
} )
.catch( err => console.error(err) );

//Donation Controller
const donationCtrl = require('./controllers/donationCtrl');
const { postDonation, deleteDonation, updateViewCount, getDonation, getDonations } = donationCtrl;

app.get('/api/donations', getDonations);
app.get('/api/donation/:id', getDonation);
app.post('/api/donation/:id', postDonation);
app.put('/api/viewCount/:id', updateViewCount);
app.delete('/api/donation/:id', deleteDonation);