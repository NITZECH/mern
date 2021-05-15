const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
// const HASH = HASH
const hash = require('../node_modules/parse')



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    work: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cpassword: {
        type: String,
        require: true
    },

});


// code for hashing the password

userSchema.pre( 'save', async function(next){
   if(this.isModified('password')){
       this.password = await bcrypt.hash(this.password, hash);
       this.cpassword = await bcrypt.hash(this.cpassword, hash);
   }
   next();
});

const User = mongoose.model('USER', userSchema);

module.exports = User;
