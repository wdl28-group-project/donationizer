require('dotenv').config();
let { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');

app.use(express.json());

massive(CONNECTION_STRING)
.then( db => {
    console.log('Excellent');
    app.set('db', db);
} )
.catch( err => console.error(err) );

app.use(
    session({
        saveUninitialized: true,
        resave: false,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    })
)

app.listen( SERVER_PORT, () => console.log('Party on, Wayne!') );


// Auth
const authCtrl = require('./controllers/authCtrl');
let { registerUser, login, logout } = authCtrl;

const donationCtrl = require('./controllers/donationCtrl');
const {getDonationByCategory,getFilteredDonations,getDonationInfo,getDonationPhotos} = donationCtrl;


app.post('/auth/register', registerUser);
app.get('/auth/login', login);
app.get('/auth/logout', logout);

app.get('/api/donations/category',getDonationByCategory);
app.get('/api/donations/filter',getFilteredDonations);
app.get('/api/donation/:id/photos',getDonationPhotos);
app.get('/api/donation/:id',getDonationInfo);



