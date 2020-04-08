require('dotenv').config();
let { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const authCtrl = require('./controllers/authCtrl');
const donationCtrl = require('./controllers/donationCtrl');

//SOCKET.IO
// var app = require('http').createServer();
var io = (module.exports.io = require('socket.io')(
  app.listen(SERVER_PORT, () => console.log('Party on, Wayne! CHAT is ON!!!'))
));
const SocketManager = require('./SocketManager');
// const io = require('socket.io')(
// app.listen(SERVER_PORT, () => console.log('Party on, Wayne! CHAT is ON!!!'))
// );
io.on('connection', SocketManager);

app.use(express.json());

massive(CONNECTION_STRING)
  .then((db) => {
    console.log('Excellent');
    app.set('db', db);
  })
  .catch((err) => console.error(err));

app.use(
  session({
    saveUninitialized: true,
    resave: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

// Auth
let { registerUser, login, logout, editUser, getUser, editPassword } = authCtrl;
app.post('/auth/register', registerUser);
app.post('/auth/login', login);
app.get('/auth/logout', logout);
app.put('/auth/editUser', editUser);
app.get('/auth/getUser', getUser);
app.put('/auth/editPassword', editPassword);

//Donation Controller
const {
  getDonationByCategory,
  getFilteredDonations,
  getDonationInfo,
  getDonationPhotos,
  getDonations,
  postDonation,
  deleteDonation,
  updateViewCount,
  postFavourite,
  getUserFavorites,
  postDonationPhoto,
  getUserDonations,
} = donationCtrl;

app.get('/api/donations/category', getDonationByCategory);
app.get('/api/donations/:id', getDonations);
app.get('/api/donations/filter', getFilteredDonations);

app.get('/api/donation/:id', getDonationInfo);
app.post('/api/donation', postDonation);
app.get('/api/donation/:id/photos', getDonationPhotos);
app.put('/api/viewCount/:id', updateViewCount);
app.delete('/api/donation/:id', deleteDonation);
app.get('/api/donations/favorites/:id', getUserFavorites);
app.get('/api/donations/users/:id', getUserDonations);

app.post('/api/postPhoto',postDonationPhoto)
app.post('/api/favourites', postFavourite);
