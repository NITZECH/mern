const dotenv = require('dotenv');
const mongoose = require('mongoose');


const {
    response
} = require('express');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});
require('./db/conn.js')

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;

// const User = require('./model/userSchema')


app.get('/', (req, res) => {
    res.send(`Hello world from the backend server`)
});

app.get('/home', (req, res) => {
    res.send(`Hello world from the Home server`)
});

// app.get('/about', middleware, (req, res) => {
//     res.send(`Hello world from the About server`);
//     console.log('Here is my about');

// });

app.get('/services', (req, res) => {
    res.send(`Hello world from the services server`)
});

app.listen(PORT, () => {
    console.log(` running at ${PORT}`)
})
