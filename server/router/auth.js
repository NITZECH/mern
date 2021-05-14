const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
  res.send(`Hello world from the router server`)
});

// CODE WRITTEN USING PROMISES
// router.post('/register', (req, res) => {

//   const {
//     name,
//     email,
//     phone,
//     work,
//     password,
//     cpassword
//   } = req.body;
//   if (!name || !email || !phone || !password || !cpassword) {
//     return res.status(422).json({
//       error: "Fill the form" 
//     });
//   }

//   User.findOne({
//     email: email
//   }).then((userExist) => {
//     if (userExist) {
//       return res.status(422).json({
//         error: 'Email already exists'
//       })
//     }

//     const user = new User({
//       name,
//       email,
//       phone,
//       work,
//       password,
//       cpassword
//     });

//     user.save().then(() => {
//       res.status(201).json({
//         message: "User Registered Successfully."
//       });
//     }).catch((err) => res.status(500).json({
//       error: "This is an database error, Please try after some time"
//     }));
//   }).catch(err => {
//     console.log(err);
//   });
// });


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
    const userExist = await  User.findOne({
      email: email
    });


    if (userExist) {
      return res.status(422).json({
        error: 'Email already exists'
      })
    };

    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      cpassword
    });

    const userRegister = await user.save();

    if (userRegister) {
      res.status(201).json({
        message: "User Registered Successfully."
      });
    }

  } catch (err) {
    console.log(err);

  }


});




module.exports = router;

// {
// 	"name":"vinod",
//     "email":"vinod@gmail.com",
//     "phone": 98776755565,
//     "work": "web dev",
//     "password": "thapa",
//     "cpassword": "thapa"

// }
