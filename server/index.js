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

// Auth
const authCtrl = require('./controllers/authCtrl');
let { registerUser, login, logout } = authCtrl;

app.post('/auth/register', registerUser);
app.get('/auth/login', login);
app.get('/auth/logout', logout);