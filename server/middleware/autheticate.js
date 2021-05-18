const { request } = require('express');
const jwt = require('jsonwebtoken');

const User = require('../model/userSchema');

const autheticate = async  (res, req, next) => {
try{
const token = req.cookies.token;
const verifyToken = jwt.verify( token, process.env.SECRET_KEY);

const rootUser = await User.findOne({ _id: verifyToken._id , "token.token ": token});

if (!rootUser) { throw new Error('User Not Found')}

req.token = token;
req.rootUser = rootUser;
req.userID = rootUser._id;
next();

}catch(err){
    res.status(401).send("Unauthorized: NO TOKEN PROVIDED")
    console.log(err);
}
}

module.exports = autheticate;