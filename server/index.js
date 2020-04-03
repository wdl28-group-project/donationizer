require('dotenv').config();
let { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const authCtrl = require('./controllers/authCtrl');
const donationCtrl = require('./controllers/donationCtrl');
//SOCKET.IO
const io = require('socket.io')(
  app.listen(SERVER_PORT, () => console.log('Party on, Wayne! CHAT is ON!!!'))
);

let userCount = 1;

io.on('connection', socket => {
  userCount++;

  const username = `Guest ${userCount}`;

  socket.emit('SET_USERNAME', username);
  io.sockets.emit('CREATE_MESSAGE', {
    content: `${username} connected`
  });

  socket.on('SEND_MESSAGE', messageObj => {
    // console.log(messageObj);
    io.sockets.emit('CREATE_MESSAGE', messageObj);
  });

  socket.on('DISCONNECTED', () => {
    io.sockets.emit('CREATE_MESSAGE', {
      content: `${username} disconnected`
    });
  });
});

app.use(express.json());

massive(CONNECTION_STRING)
  .then(db => {
    console.log('Excellent');
    app.set('db', db);
  })
  .catch(err => console.error(err));

app.use(
  session({
    saveUninitialized: true,
    resave: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

// app.listen(SERVER_PORT, () => console.log());

// Auth
let { registerUser, login, logout, editUser } = authCtrl;
app.post('/auth/register', registerUser);
app.post('/auth/login', login);
app.get('/auth/logout', logout);
app.put('/auth/editUser', editUser);
app.get('/auth/getUser', getUser);

//Donation Controller
const {
  getDonationByCategory,
  getFilteredDonations,
  getDonationInfo,
  getDonationPhotos,
  getDonations,
  postDonation,
  deleteDonation,
  updateViewCount
} = donationCtrl;

app.get('/api/donations', getDonations);
app.post('/api/donation/', postDonation);
app.put('/api/viewCount/:id', updateViewCount);
app.delete('/api/donation/:id', deleteDonation);

app.get('/api/donations/category', getDonationByCategory);
app.get('/api/donations/filter', getFilteredDonations);
app.get('/api/donation/:id/photos', getDonationPhotos);
app.get('/api/donation/:id', getDonationInfo);
