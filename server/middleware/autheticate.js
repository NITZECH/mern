const { request } = require('express');
const jwt = require('jsonwebtoken');

const User = require('../model/userSchema');

const autheticate = async  (res, req, next) => {
try{
const token = req.cookies.token;
const verifyToken =
}catch(err){
    res.status(401).send("Unauthorized: NO TOKEN PROVIDED")
    console.log(err);
}
}

module.exports = autheticate;