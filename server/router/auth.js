const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../db/conn');
const User = require('../model/userSchema');
const autheticate = require('../middleware/Autheticate');

router.get('/', (req, res) => {
  res.send(`Hello world from the router server`)
});

//CODE WRITTEN USING ASYNC AWAIT
router.post('/register', async (req, res) => {

  const {
    name,
    email,
    phone,
    work,
    password,
    cpassword
  } = req.body;
  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({
      error: "Fill the form"
    });
  }

  try {
    const userExist = await User.findOne({
      email: email
    });


    if (userExist) {
      return res.status(422).json({
        error: 'Email already exists'
      })
    } else if (password != cpassword) {
      return res.status(422).json({
        error: 'Invalid credentials'
      })
    } else {

      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword
      });

      await user.save();


      res.status(201).json({
        message: "User Registered Successfully."
      });


    }



  } catch (err) {
    console.log(err);

  }


});


//login route
router.post('/signin', async (req, res) => {
  try {let token;
    const {
      email,
      password
    } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: 'fill the form'
      });
    }
    const userLogin = await User.findOne({
      email: email
    });
    
if (userLogin){
  const isMatch = await bcrypt.compare( password, userLogin.password )
    
   token = await  userLogin.generateAuthToken();   
  console.log(token);

  res.cookie('jwtoken', token, {
    expires: new Date(Date.now() + 258920000000 ),
    httpOnly: true
  });

  if (!isMatch) {
    res.status(400).json({
      error: "User error, Invalid credentials"
    });
  } else {
    res.status(200).json({
      message: "User Signed in successfully"
    });
  }
}else {
  res.status(400).json({
    message: "Invalid credentials"
  });
}   

  } catch (err) {
    console.log(err);
  }
})

//about us page route with middleware
router.get('/about', autheticate, (req, res) => {
  res.send(`Hello world from the About server`);
  console.log('Here is my about');

});

module.exports = router;

