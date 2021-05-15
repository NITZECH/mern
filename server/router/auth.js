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
router.post('/login', async (req, res) => {
  try {
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
    console.log(userLogin);
    if (!userLogin) {
      res.status(400).json({
        message: "User error"
      });
    } else {
      res.status(200).json({
        message: "User Signed in successfully"
      });
    }

  } catch (err) {
    console.log(err);
  }
})



module.exports = router;

// {
// 	"name":"vinod",
//     "email":"vinod@gmail.com",
//     "phone": 98776755565,
//     "work": "web dev",
//     "password": "thapa",
//     "cpassword": "thapa"

// }
